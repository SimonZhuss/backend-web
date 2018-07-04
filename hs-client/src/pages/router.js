import Loadable from "react-loadable";
import { Loading } from "element-react";

const LoadableUserInfoQuery = Loadable({
    loader: () =>  import("./content/UserManage/UserInfoQuery"),
    loading: Loading
});

export const ROUTES = [
    {
        path: "/user/userInfoQuery",
        component: LoadableUserInfoQuery
    }, {
        path: "/user/userCredit",
        component: LoadableUserInfoQuery
    }
];