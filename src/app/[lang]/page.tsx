import { Locale } from "@/i18n.config"; 
import { getDictionary } from "@/lib/dictionary"; 

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);
  return (
    <div className="w-full h-screen bg-primaryMain dark:bg-primaryDark">
      <div className="">
        Home Page
        <p>This is Home Page / Global </p>
        <p>{page.home.title}</p>
        <p>{page.home.description}</p>
      </div>
    </div>
  );
}
