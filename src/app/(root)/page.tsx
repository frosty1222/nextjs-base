import DefaultLayout from "@/components/DefaultLayout";
import Banner from "@/components/HomeComponent/Banner";
import { GET_MENU } from "@/services/ApiService/homeQuery/HeaderQuery";
import { initializeApollo } from "../lib/apolloClient";

interface HomePageProps{
  menuData:any
}
const fetchMenuData = async () => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query({
    query: GET_MENU,
  });

  return data.menus; 
};

export default async function Home() {
  const menuData = await fetchMenuData();

  return (
    <DefaultLayout menuData={menuData}>
      <Banner />
    </DefaultLayout>
  );
}