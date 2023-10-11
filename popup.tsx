import "ress"
import "styles/popup.scss"
import { useForm } from "react-hook-form"
import { useStorage } from "@plasmohq/storage/hook"
import type { Settings } from "~types/settings"

function IndexPopup() {
  const [settings, setSettings] = useStorage<Settings>("settings")
  const { register, handleSubmit } = useForm<Settings>({ values: settings })

  const submit = (data: Settings) => {
    setSettings(data)
  }

  return (
    <div className="root">
      <header>4次元ポケット for manaba</header>
      <form className="features" onSubmit={handleSubmit(submit)}>
        <div className="feature">
          <input type="checkbox" id="features.colorize-assignments" {...register("features.colorizeAssignments")} />
          <label htmlFor="features.colorize-assignments">課題に色を付ける</label>
        </div>
        <div className="feature">
          <input type="checkbox" id="features.skipExternalLinkConfirmation" {...register("features.skipExternalLinkConfirmation")} />
          <label htmlFor="features.skipExternalLinkConfirmation">外部リンクの確認をスキップ</label>
        </div>
        <div className="feature">
          <input type="checkbox" id="features.addSyllabusLinkToCourseCode" {...register("features.addSyllabusLinkToCourseCode")} />
          <label htmlFor="features.addSyllabusLinkToCourseCode">科目番号をシラバスへのリンクに</label>
        </div>
        <button>保存</button>
      </form>
      <footer>
        <a href="https://github.com/s7tya/4-dim-pocket" className="link" target="_blank" rel="noreferrer noopener">GitHub</a>
      </footer>
    </div>
  )
}

export default IndexPopup
