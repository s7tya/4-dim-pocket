import "ress"
import "styles/popup.scss"
import { useForm } from "react-hook-form"

function IndexPopup() {
  const { register } = useForm<{
    features: {
      colorizeAssignments: boolean,
      skipExternalLinkConfirmation: boolean,
      addSyllabusLinkToCourseCode: boolean,
    }
  }>()

  return (
    <div className="root">
      <header>4次元ポケット for manaba</header>
      <form className="features">
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
      </form>
      <footer>
        <a href="https://github.com/s7tya/4-dim-pocket" className="link" target="_blank" rel="noreferrer noopener">GitHub</a>
      </footer>
    </div>
  )
}

export default IndexPopup
