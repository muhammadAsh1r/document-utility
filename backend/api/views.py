from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers import (
    ExtractMetadataSerializer,
    ValidateFileSerializer,
    CleanTextSerializer,
    StandardizeFilenameSerializer,
)

from .utils import (
    standardize_filename,
    clean_text,
    validate_file,
    extract_pdf_metadata,
    extract_docx_metadata,
)


# ======================================================
#                STANDARDIZE FILENAME
# ======================================================
class StandardizeFilenameView(APIView):
    def post(self, request):
        serializer = StandardizeFilenameSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        original = serializer.validated_data["filename"]
        standardized = standardize_filename(original)

        return Response({
            "original": original,
            "standardized": standardized
        })


# ======================================================
#                    CLEAN TEXT
# ======================================================
class CleanTextView(APIView):
    def post(self, request):
        serializer = CleanTextSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        text = serializer.validated_data["text"]
        remove_emojis = serializer.validated_data["remove_emojis"]

        cleaned = clean_text(text, remove_emojis)

        return Response({
            "cleaned_text": cleaned,
            "length_before": len(text),
            "length_after": len(cleaned),
        })


# ======================================================
#                  VALIDATE FILE
# ======================================================
class ValidateFileView(APIView):
    def post(self, request):
        serializer = ValidateFileSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        errors = validate_file(serializer.validated_data["file"])

        return Response({
            "valid": len(errors) == 0,
            "errors": errors
        })


# ======================================================
#                EXTRACT METADATA
# ======================================================
class ExtractMetadataView(APIView):
    def post(self, request):
        serializer = ExtractMetadataSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        file = serializer.validated_data["file"]
        name = file.name.lower()

        try:
            if name.endswith(".pdf"):
                return Response(extract_pdf_metadata(file))

            if name.endswith(".docx"):
                return Response(extract_docx_metadata(file))

        except Exception:
            return Response(
                {"error": "File corrupted or unreadable"},
                status=status.HTTP_400_BAD_REQUEST
            )

        return Response(
            {"error": "Unsupported file type"},
            status=status.HTTP_400_BAD_REQUEST
        )
