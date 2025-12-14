from django.urls import path

from .views import (
    ExtractMetadataView,
    ValidateFileView,
    CleanTextView,
    StandardizeFilenameView,
)

urlpatterns = [
    path("extract-metadata/", ExtractMetadataView.as_view()),
    path("validate-file/", ValidateFileView.as_view()),
    path("clean-text/", CleanTextView.as_view()),
    path("standardize-filename/", StandardizeFilenameView.as_view()),
]
