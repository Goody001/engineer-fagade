from django import forms
from django.forms import ModelForm, TextInput, Textarea, FileInput
from api.models import Newsletter

class NewsletterForm(ModelForm):
    class Meta:
        model = Newsletter

        # image = forms.ImageField()
        fields = ('title', 'image', 'text_body')

        # styling the form
        widgets = {
            'title': TextInput(
                attrs={
                    'class': "form-control",

                }),
            'image': FileInput(
                attrs={
                    'class': "form-control",
                }),
            'text_body': Textarea(
                attrs={
                    'class': "form-control",
                }),
        }

