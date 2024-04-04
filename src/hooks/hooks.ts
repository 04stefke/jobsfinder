import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../app/Store";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>
export const useAppSelector = useSelector.withTypes<RootState>