/*
 * <<
 * Davinci
 * ==
 * Copyright (C) 2016 - 2017 EDP
 * ==
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * >>
 */

import { createSelector } from 'reselect'

const selectGlobal = (state) => state.global

const makeSelectLogged = () => createSelector(
  selectGlobal,
  (globalState) => globalState.logged
)

const makeSelectLoginUser = () => createSelector(
  selectGlobal,
  (globalState) => globalState.loginUser
)

const makeSelectLoginLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.loginLoading
)

const makeSelectNavigator = () => createSelector(
  selectGlobal,
  (globalState) => globalState.navigator
)

const makeSelectDownloadList = () => createSelector(
  selectGlobal,
  (globalState) => globalState.downloadList
)

const makeSelectDownloadListLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.downloadListLoading
)

const makeSelectLocationState = () => {
  let prevRoutingState
  let prevRoutingStateJS

  return (state) => {
    const routingState = state.route // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState
      prevRoutingStateJS = routingState.toJS()
    }

    return prevRoutingStateJS
  }
}

export {
  selectGlobal,
  makeSelectLogged,
  makeSelectLoginUser,
  makeSelectLoginLoading,
  makeSelectNavigator,
  makeSelectLocationState,
  makeSelectDownloadList,
  makeSelectDownloadListLoading
}
