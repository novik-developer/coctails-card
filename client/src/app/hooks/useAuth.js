import { useSelector } from "react-redux";

export function useAuth(params) {
    const { email, token, id } = useSelector((state) => state.user);

    return {
        isAuth: !!email,
        token,
        id
    };
}
