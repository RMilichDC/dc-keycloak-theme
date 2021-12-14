
import { getKcContext } from "keycloakify";


export const { kcContext } = getKcContext<
	{
		pageId: "register.ftl";
		authorizedMailDomains: string[];
	}
>({
	// "mockPageId": "login.ftl",
	// "mockPageId": "register.ftl",
	"mockData": [
		{
			"pageId": "register.ftl",
			"authorizedMailDomains": [
				"example.com",
				"another-example.com",
				"*.yet-another-example.com",
				"*.example.com",
				"hello-world.com"
			]
		}
	]
});

export type KcContext = NonNullable<typeof kcContext>;