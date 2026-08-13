# WaterQualityArchive SDK utility: make_context

from projectname_sdk.core.context import WaterQualityArchiveContext


def make_context_util(ctxmap, basectx):
    return WaterQualityArchiveContext(ctxmap, basectx)
