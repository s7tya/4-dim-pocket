import "ress"
import "styles/popup.scss"
import { useForm } from "react-hook-form"

function IndexPopup() {
  const { register, watch } = useForm<{
    features: {
      colorizeAssignments: boolean
    }
  }>()
  const values = watch()

  return (
    <div className="root">
      <header>4次元ポケット for manaba</header>
      <form className="features">
        <div className="feature">
          <input type="checkbox" id="features.colorize-assignments" {...register("features.colorizeAssignments")} />
          <label htmlFor="features.colorize-assignments">課題に色を付ける</label>
        </div>
      </form>
    </div>
  )
}

export default IndexPopup
