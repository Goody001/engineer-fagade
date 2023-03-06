from django.core import paginator
from django.shortcuts import render, redirect
from django.urls import reverse
from django.http.response import HttpResponse
from django.contrib import messages
from django.contrib.auth import authenticate, login as dj_login, logout
from django.core.paginator import Paginator
from .forms import NewsletterForm
from api.models import Newsletter

# Create your views here.

def admin_page(request):

    if request.user.is_authenticated:
        if request.method == 'POST':
            form = NewsletterForm(request.POST, request.FILES)

            if form.is_valid():
                form.save()

                # form_object = form.instance

                # return redirect(reverse('frontend:index'))
                return redirect('/newsletter/')
        else:
            form=NewsletterForm()

        news_ojects = Newsletter.objects.all().order_by('-created')
        paginator = Paginator(news_ojects, 5)

        page_number = request.GET.get('page')
        page_obj = paginator.get_page(page_number)

        return render(request, 'auth/admin_page.html', {'form':form,
                                                        'newsletters':news_ojects, 'page_obj':page_obj})
    else:
      return redirect('my_admin:render_login')

def render_login(request):
    if not request.user.is_authenticated:
        return render(request, "auth/login.html")
    else:
        return redirect('my_admin:admin_page')

def login(request):

    if request.method != 'POST':
        return HttpResponse("Method is not allowed")

    else:
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(username=username, password=password)


        # print("\n{}".format(user))


        if user is not None:
            dj_login(request, user)
            messages.success(request, "Logged In Sucessfully!!")
            return redirect("my_admin:admin_page")
        else:
            messages.error(request,"Username or password is invalid.")
            return redirect('my_admin:render_login')


    # form = AuthenticationForm()


def signout(request):
    logout(request)
    messages.success(request, "Logged Out Successfully!!")
    return redirect('my_admin:render_login')

