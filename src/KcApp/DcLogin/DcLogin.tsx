import { memo, useState, useEffect } from "react";
import { KcProps } from "keycloakify";
import type { KcContext } from "../kcContext";
import styles from "./DcLogin.module.scss";
import ParticlesWrapper from "./ParticlesWrapper";
import { FcKey } from "react-icons/fc";

type DcLogin = Extract<KcContext, { pageId: "login.ftl" }>;

export const DcLoginTheme = memo(
  ({ kcContext, ...props }: { kcContext: DcLogin } & KcProps) => {
    const { url, realm, message, social } = kcContext;
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [hideMessage, setHideMessage] = useState(true);
    const [errors, setErrors] = useState({ username: "", password: "" });

    console.log({ kcContext });

    useEffect(() => {
      if (
        message?.type === "error" ||
        message?.type === "warning" ||
        message?.type === "info"
      )
        setHideMessage(false);
    }, []);

    const changeValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHideMessage(true);
      setErrors((prevState) => ({
        ...prevState,
        [e.target.id]:
          e.target.value === "" ? `Please enter a ${e.target.id}` : "",
      }));
    };

    return (
      <div className={styles.login_page_container}>
        <div className={styles.login_window_container}>
          <ParticlesWrapper />
          <h3 className={styles.slogen_phrase}>
            <FcKey />
            <strong>Welcome</strong>, to start investigating, please login
          </h3>

          {!hideMessage && message?.type && (
            <div style={{ textAlign: "center" }}>
              <span>{message.summary}</span>
            </div>
          )}
          <form
            action={url.loginAction}
            method="post"
            className={styles.login_form}
          >
            <div className={styles.form_control}>
              <input
                className={styles.login_input}
                placeholder="Username"
                type="text"
                id="username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  changeValueHandler(e);
                }}
                name="username"
              />
              {errors.username && (
                <span className={styles.error}>{errors.username}</span>
              )}
            </div>

            <div className={styles.form_control}>
              <input
                className={styles.login_input}
                placeholder="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  changeValueHandler(e);
                }}
                name="password"
              />
              {errors.password && (
                <span className={styles.error}>{errors.password}</span>
              )}
            </div>
            <button
              type="submit"
              className={styles.login_button}
              disabled={username === "" || password === ""}
            >
              Login
            </button>
          </form>

          <div className={styles.login_footer_container}>
            {realm.registrationAllowed && (
              <div className={styles.register_container}>
                <a className={styles.register_link} href={url.registrationUrl}>
                  register
                </a>
              </div>
            )}
            {social.providers && (
              <div className={styles.sso_container}>
                {social.providers.map((provider) => (
                  <a className={styles.sso_link} key={provider.providerId}>
                    <i className={`fa fa-${provider.alias}`}></i>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);
