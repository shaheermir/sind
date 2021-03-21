import { takeEvery } from "redux-saga/effects"
import { loadMonstersSaga } from "./monsterSagas"

function* rootSaga() {
  yield takeEvery("LOAD_MONSTERS_REQUEST", loadMonstersSaga)
}

export default rootSaga
