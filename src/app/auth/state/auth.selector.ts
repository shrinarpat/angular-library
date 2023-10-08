import { createFeatureSelector } from "@ngrx/store";
import { AUTH_STATE_NAME, AuthState } from "./auth.state";

const authFeatureState = createFeatureSelector<AuthState>(AUTH_STATE_NAME)