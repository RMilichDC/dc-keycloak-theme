
import { getKcContext } from "keycloakify";


export const { kcContext } = getKcContext<
	{
		pageId: "register.ftl";
		authorizedMailDomains: string[];
	} |
	{
		pageId: "my-extra-page-1.ftl";
	} | {
		pageId: "my-extra-page-2.ftl";
		someCustomValue: string;
	} |
	{
		pageId: "login.ftl";
	}
>({
	// "mockPageId": "login.ftl",
	// "mockPageId": "register.ftl",
	"mockData": [
		{
			"pageId": "my-extra-page-2.ftl",
			"someCustomValue": "foo bar baz"
		},
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