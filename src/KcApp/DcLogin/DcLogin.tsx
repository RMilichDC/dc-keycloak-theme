import { memo } from "react";
import type { KcProps } from "keycloakify";
import type { KcContext } from "../kcContext";
import styles from "./DcLogin.module.scss";
import ParticlesWrapper from "./ParticlesWrapper";
import { FcKey } from "react-icons/fc";

type DcLogin = Extract<KcContext, { pageId: "dc-login.ftl" }>;

export const DcLoginTheme = memo(
  ({ kcContext, ...props }: { kcContext: DcLogin } & KcProps) => {


    const { url, realm, } = kcContext;

    console.log({ url });
    console.log({ realm });

    return (
      <div className={styles.login_page_container}>
        <div className={styles.login_window_container}>
          <ParticlesWrapper />
          <h3 className={styles.slogen_phrase}>
            <FcKey />
            <strong>Welcome</strong>, to start investigating, please login
          </h3>
          <form
            action={url.loginAction}
            method="post"
            className={styles.login_form}
            // onSubmit={submitLoginFormHandler}
          >
            <input
              className={styles.login_input}
              placeholder="Username"
              type="text"
            />
            <input
              className={styles.login_input}
              placeholder="Password"
              type="password"
            />
            <button type="submit" className={styles.login_button}>
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
);
