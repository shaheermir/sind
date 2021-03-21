import { call, put } from "redux-saga/effects"
import { loadMonstersApi } from "../api/monstersApi"

function* loadMonstersSaga(action) {
  try {
    const data = yield call(loadMonstersApi)
    yield put({ type: "LOAD_MONSTERS_SUCCESS", data })
  } catch (e) {
    yield put({ type: "LOAD_MONSTERS_FAILED", error: e.message })
  }
}

export { loadMonstersSaga }
