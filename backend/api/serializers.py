from rest_framework import serializers

class StandardizeFilenameSerializer(serializers.Serializer):
    filename = serializers.CharField()


class CleanTextSerializer(serializers.Serializer):
    text = serializers.CharField()
    remove_emojis = serializers.BooleanField(required=False, default=False)


class ExtractMetadataSerializer(serializers.Serializer):
    file = serializers.FileField()


class ValidateFileSerializer(serializers.Serializer):
    file = serializers.FileField()
