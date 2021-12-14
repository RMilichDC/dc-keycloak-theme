

import { memo } from "react";
import type { KcContext } from "./kcContext";
import { defaultKcProps as props } from "keycloakify";
import { Register } from "./Register";
import { Info } from "keycloakify/lib/components/Info";
import { Error } from "keycloakify/lib/components/Error";
import { LoginResetPassword } from "keycloakify/lib/components/LoginResetPassword";
import { LoginVerifyEmail } from "keycloakify/lib/components/LoginVerifyEmail";
import { Terms } from "./Terms";
import { LoginOtp } from "keycloakify/lib/components/LoginOtp";
import { LoginUpdateProfile } from "keycloakify/lib/components/LoginUpdateProfile";
import { LoginIdpLinkConfirm } from "keycloakify/lib/components/LoginIdpLinkConfirm";
import { RegisterUserProfile } from "keycloakify/lib/components/RegisterUserProfile";
import "./kcMessagesExtension";
import { DcLoginTheme } from "./DcLogin/DcLogin";

export const KcApp = memo(({ kcContext }: { kcContext: KcContext; }) => {
    switch (kcContext.pageId) {
        case "login.ftl": return <DcLoginTheme {...{ kcContext, ...props }} />;
        case "register.ftl": return <Register {...{ kcContext, ...props }} />;
        case "info.ftl": return <Info {...{ kcContext, ...props }} />;
        case "error.ftl": return <Error {...{ kcContext, ...props }} />;
        case "login-reset-password.ftl": return <LoginResetPassword {...{ kcContext, ...props }} />;
        case "login-verify-email.ftl": return <LoginVerifyEmail {...{ kcContext, ...props }} />;
        case "terms.ftl": return <Terms {...{ kcContext, ...props }} />;
        case "login-otp.ftl": return <LoginOtp {...{ kcContext, ...props }} />;
        case "login-update-profile.ftl": return <LoginUpdateProfile {...{ kcContext, ...props }} />;
        case "login-idp-link-confirm.ftl": return <LoginIdpLinkConfirm {...{ kcContext, ...props }} />;
        case "register-user-profile.ftl": return <RegisterUserProfile {...{ kcContext, ...props }} />;
    }
});