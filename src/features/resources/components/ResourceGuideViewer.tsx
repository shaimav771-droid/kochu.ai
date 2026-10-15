import { Download, ExternalLink, Lightbulb } from 'lucide-react'
import { ResourceGuide } from '../types/resource'

interface ResourceGuideViewerProps {
  guide: ResourceGuide
}

export function ResourceGuideViewer({ guide }: ResourceGuideViewerProps) {
  return (
    <div className="space-y-6 text-left">
      {/* Guide Summary */}
      {guide.summary && (
        <div className="p-4 rounded-xl bg-[#fafcf9] border border-[#d8eed0] text-xs sm:text-sm text-[#384931] leading-relaxed">
          <strong className="text-[#141f10] block mb-1">Overview:</strong>
          {guide.summary}
        </div>
      )}

      {/* Step by step list */}
      <div className="space-y-4">
        {guide.steps.map((step) => (
          <div
            key={step.stepNumber}
            className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-[#e4ede1] shadow-2xs"
          >
            {/* Step number badge */}
            <div className="w-7 h-7 rounded-full bg-[#74C640] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 shadow-xs">
              {step.stepNumber}
            </div>

            {/* Step details */}
            <div className="flex-1 space-y-1.5">
              <h4 className="text-sm font-bold text-[#141f10] flex items-center gap-2">
                <span>{step.title}</span>
              </h4>
              <p className="text-xs sm:text-[13px] text-[#4d5f46] leading-relaxed">
                {step.content}
              </p>

              {step.tip && (
                <div className="flex items-start gap-1.5 pt-1.5 text-[11px] text-[#2c5c13] font-medium bg-[#ebf8e3]/60 px-2.5 py-1.5 rounded-lg border border-[#74C640]/20">
                  <Lightbulb className="w-3.5 h-3.5 text-[#74C640] shrink-0 mt-0.5" />
                  <span>
                    <strong>Pro Tip:</strong> {step.tip}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Download / Template file action */}
      {guide.downloadUrl && (
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-xl bg-gradient-to-r from-[#f4faf1] to-white border border-[#cbe6c0]">
          <div>
            <div className="text-xs font-mono font-bold text-[#2c5c13] uppercase tracking-wider">
              {guide.fileFormat || 'Resource Attachment'}
            </div>
            <div className="text-sm font-bold text-[#141f10] mt-0.5">
              {guide.downloadLabel || 'Download Template / Guide'}
            </div>
          </div>

          <a
            href={guide.downloadUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#74C640] hover:bg-[#64b034] text-white text-xs sm:text-sm font-bold shadow-sm transition-all duration-200 active:scale-95 shrink-0"
          >
            <Download className="w-4 h-4" />
            <span>Open / Download</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>
      )}
    </div>
  )
}
