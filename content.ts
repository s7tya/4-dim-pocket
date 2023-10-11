import "styles/contents.scss"
import { addSyllabusLinkToCourseCode } from "~handlers/addSyllabusLinkToCourseCode"
import { colorizeAssignments } from "~handlers/colorizeAssignMents"
import { skipExternalLinkConfirmation } from "~handlers/skipExternalLinkConfirmation"
import { Storage } from "@plasmohq/storage"
import type { Settings } from "~types/settings"

const storage = new Storage()

const main = async () => {
    const settings: Settings = await storage.get("settings")

    if (settings.features.skipExternalLinkConfirmation) {
        console.log("Enable skipExternalLinkConfirmation")
        skipExternalLinkConfirmation()
    } else {
        console.log("Disable skipExternalLinkConfirmation")
    }

    if (settings.features.colorizeAssignments) {
        console.log("Enable colorizeAssignments")
        colorizeAssignments()
    } else {
        console.log("Disable colorizeAssignments")
    }

    if (settings.features.addSyllabusLinkToCourseCode) {
        console.log("Enable addSyllabusLinkToCourseCode")
        addSyllabusLinkToCourseCode()
    } else {
        console.log("Disable addSyllabusLinkToCourseCode")
    }
}

(async () => { await main() })()
