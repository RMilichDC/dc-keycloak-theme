import { memo, useState } from "react";
import { KcProps } from "keycloakify";
import { Template } from "keycloakify/lib/components/Template";
import type { KcContext } from "../kcContext";
import styles from "./DcLogin.module.scss";
import ParticlesWrapper from "./ParticlesWrapper";
import { FcKey } from "react-icons/fc";

type DcLogin = Extract<KcContext, { pageId: "login.ftl" }>;

export const DcLoginTheme = memo(
  ({ kcContext, ...props }: { kcContext: DcLogin } & KcProps) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({ username: "", password: "" });
    const { url } = kcContext;

    const changeValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setErrors((prevState) => ({
        ...prevState,
        [e.target.id]:
          e.target.value === "" ? `Please enter a ${e.target.id}` : "",
      }));
    };

    console.log({ url });

    // return (
    //   <Template
    //     showUsernameNode={false}
    //     infoNode={false}
    //     headerNode={false}
    //     doFetchDefaultThemeResources={false}
    //     {...{ kcContext, ...props }}
    //     formNode={
    //       <div className={styles.login_page_container}>
    //         <div className={styles.login_window_container}>
    //           <ParticlesWrapper />
    //           <h3 className={styles.slogen_phrase}>
    //             <FcKey />
    //             <strong>Welcome</strong>, to start investigating, please login
    //           </h3>
    //           <form
    //             action={url.loginAction}
    //             method="post"
    //             className={styles.login_form}
    //           >
    //             <div className={styles.form_control}>
    //               <input
    //                 className={styles.login_input}
    //                 placeholder="Username"
    //                 type="text"
    //                 id="username"
    //                 value={username}
    //                 onChange={(e) => {
    //                   setUsername(e.target.value);
    //                   changeValueHandler(e);
    //                 }}
    //                 name="username"
    //               />
    //               {errors.username && (
    //                 <span className={styles.error}>{errors.username}</span>
    //               )}
    //             </div>

    //             <div className={styles.form_control}>
    //               <input
    //                 className={styles.login_input}
    //                 placeholder="Password"
    //                 type="password"
    //                 id="password"
    //                 value={password}
    //                 onChange={(e) => {
    //                   setPassword(e.target.value);
    //                   changeValueHandler(e);
    //                 }}
    //                 name="password"
    //               />
    //               {errors.password && (
    //                 <span className={styles.error}>{errors.password}</span>
    //               )}
    //             </div>
    //             <button
    //               type="submit"
    //               className={styles.login_button}
    //               disabled={username === "" || password === ""}
    //             >
    //               Login
    //             </button>
    //           </form>
    //         </div>
    //       </div>
    //     }
    //   />
    // );

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
        </div>
      </div>
    );
  }
);
