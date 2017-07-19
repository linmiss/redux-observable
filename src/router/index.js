import React from 'react'
import { Route, Redirect } from 'react-router'
import Layout from '../Containers/Layout.jsx'
import AddNum from '../Containers/index.jsx'

export default (
    <Route component={Layout}>
        {/* <Redirect path="/" to="/login" /> */}
        <Route path="/" component={AddNum}></Route>
        {/*404页面*/}
        <Redirect path="/*" to="/" />
    </Route>
)