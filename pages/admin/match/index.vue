<template>
  <div>
    <h1>巡迴賽</h1>
    <div class="match-list">
      <div class="match-item" v-for="item in list">
        <div class="match-logo">
          <img :src="item.logo" />
        </div>
        <div class="match-info">
          <h3>{{ item.name }}</h3>
          <div class="match-meta">
            <span>{{ item.date }}</span>
            <span> | </span>
            <span>{{ item.location }}</span>
          </div>
          <div class="match-meta">
            <span>progress：{{ item.progress }}</span>
          </div>
          <div>
            <a :href="item.url" target="_blank">
              <a-button type="primary">查看赛程</a-button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  key: "match",
  layout: "admin",
});
type Match = {
  name: string;
  cat_logo: string;
  logo: string;
  start_date: string;
  end_date: string;
  location: string;
  date: string;
  header_url: string;
  progress: "finished" | "future";
};
const list = ref<Match[]>([]);
function getList() {
  list.value = [
    {
      start_date: "2023-01-10 00:00:00",
      end_date: "2023-01-15 23:59:59",
      name: "PETRONAS Malaysia Open 2023",
      url: "https:\/\/bwfworldtour.bwfbadminton.com\/tournament\/4699\/petronas-malaysia-open-2023\/results\/",
      date: "10  - 15 Jan",
      location: "Kuala Lumpur, Malaysia",
      logo: "https:\/\/extranet.bwfbadminton.com\/docs\/events\/4699\/logo-colour\/malaysia_open_2023.png",
      cat_logo:
        "https:\/\/bwfbadminton.com\/wp-content\/themes\/fansite-2020\/assets\/images\/tournament\/suffix_1000_white-01.svg",
      header_url:
        "https:\/\/img.bwfbadminton.com\/image\/upload\/t_96_Fansite_Homepage_Tourament_Header_medium\/v1672905346\/assets\/tournaments\/header\/4310C928-4346-43FA-A82B-63F58544A4EA.png",
      progress: "finished",
    },
    {
      start_date: "2023-01-17 00:00:00",
      end_date: "2023-01-22 23:59:59",
      name: "YONEX SUNRISE India Open 2023",
      url: "https:\/\/bwfworldtour.bwfbadminton.com\/tournament\/4700\/yonex-sunrise-india-open-2023\/results\/",
      date: "17  - 22 Jan",
      location: "New Delhi, India",
      logo: "https:\/\/extranet.bwfbadminton.com\/docs\/events\/4700\/logo-colour\/india_open_2023.svg",
      cat_logo:
        "https:\/\/bwfbadminton.com\/wp-content\/themes\/fansite-2020\/assets\/images\/tournament\/suffix_750_white-01.svg",
      header_url:
        "https:\/\/img.bwfbadminton.com\/image\/upload\/t_96_Fansite_Homepage_Tourament_Header_medium\/v1672906183\/assets\/tournaments\/header\/9C81DC2E-84E0-4A1A-8C20-EFB1B8CB03F2.png",
      progress: "finished",
    },
    {
      start_date: "2023-01-24 00:00:00",
      end_date: "2023-01-29 23:59:59",
      name: "DAIHATSU Indonesia Masters 2023",
      url: "https:\/\/bwfworldtour.bwfbadminton.com\/tournament\/4701\/daihatsu-indonesia-masters-2023\/results\/",
      date: "24  - 29 Jan",
      location: "Jakarta, Indonesia",
      logo: "https:\/\/extranet.bwfbadminton.com\/docs\/events\/4701\/logo-colour\/DAIHATSU_Indonesia_Masters_2023.svg",
      cat_logo:
        "https:\/\/bwfbadminton.com\/wp-content\/themes\/fansite-2020\/assets\/images\/tournament\/suffix_500_white-01.svg",
      header_url:
        "https:\/\/img.bwfbadminton.com\/image\/upload\/t_96_Fansite_Homepage_Tourament_Header_medium\/v1672906522\/assets\/tournaments\/header\/4B835D01-8FB0-41D6-B78E-53ED68D9E9A9.png",
      progress: "finished",
    },
    {
      start_date: "2023-01-31 00:00:00",
      end_date: "2023-02-05 23:59:59",
      name: "PRINCESS SIRIVANNAVARI Thailand Masters 2023",
      url: "https:\/\/bwfworldtour.bwfbadminton.com\/tournament\/4702\/princess-sirivannavari-thailand-masters-2023\/results\/",
      date: "31 Jan - 05 Feb",
      location: "Bangkok, Thailand",
      logo: "https:\/\/extranet.bwfbadminton.com\/docs\/events\/4702\/logo-colour\/Thailand_Masters_2023.svg",
      cat_logo:
        "https:\/\/bwfbadminton.com\/wp-content\/themes\/fansite-2020\/assets\/images\/tournament\/suffix_300_white-01.svg",
      header_url:
        "https:\/\/img.bwfbadminton.com\/image\/upload\/t_96_Fansite_Homepage_Tourament_Header_medium\/v1672907050\/assets\/tournaments\/header\/DB34957F-2E70-43B3-A935-8E98EE0EA6BF.png",
      progress: "finished",
    },
    {
      start_date: "2023-03-07 00:00:00",
      end_date: "2023-03-12 23:59:59",
      name: "YONEX German Open 2023",
      url: "https:\/\/bwfworldtour.bwfbadminton.com\/tournament\/4703\/yonex-german-open-2023\/results\/",
      date: "07  - 12 Mar",
      location: "Mulheim, Germany",
      logo: "https:\/\/extranet.bwfbadminton.com\/docs\/events\/4703\/logo-colour\/german_open_2023.svg",
      cat_logo:
        "https:\/\/bwfbadminton.com\/wp-content\/themes\/fansite-2020\/assets\/images\/tournament\/suffix_300_white-01.svg",
      header_url:
        "https:\/\/img.bwfbadminton.com\/image\/upload\/t_96_Fansite_Homepage_Tourament_Header_medium\/v1673238407\/assets\/tournaments\/header\/24639F0A-A1CA-4711-A78B-DFC8AB19FD1A.png",
      progress: "finished",
    },
    {
      start_date: "2023-03-14 00:00:00",
      end_date: "2023-03-19 23:59:59",
      name: "YONEX All England Open Badminton Championships 2023",
      url: "https:\/\/bwfworldtour.bwfbadminton.com\/tournament\/4704\/yonex-all-england-open-badminton-championships-2023\/results\/",
      date: "14  - 19 Mar",
      location: "Birmingham, England",
      logo: "https:\/\/extranet.bwfbadminton.com\/docs\/events\/4704\/logo-colour\/all_england.png",
      cat_logo:
        "https:\/\/bwfbadminton.com\/wp-content\/themes\/fansite-2020\/assets\/images\/tournament\/suffix_1000_white-01.svg",
      header_url:
        "https:\/\/img.bwfbadminton.com\/image\/upload\/t_96_Fansite_Homepage_Tourament_Header_medium\/v1673238467\/assets\/tournaments\/header\/A412AEC4-F2E1-4393-94E2-2BD344F220FA.png",
      progress: "finished",
    },
    {
      start_date: "2023-03-14 00:00:00",
      end_date: "2023-03-19 23:59:59",
      name: "Ruichang China Masters 2023",
      url: "https:\/\/bwfbadminton.com\/tournament\/4855\/ruichang-china-masters-2023",
      date: "14  - 19 Mar",
      location: "Ruichang, China",
      logo: "https:\/\/extranet.bwfbadminton.com\/docs\/events\/4855\/logo-colour\/China_Masters_2023.svg",
      cat_logo:
        "https:\/\/bwfbadminton.com\/wp-content\/themes\/fansite-2020\/assets\/images\/tournament\/suffix_100_white-01.svg",
      header_url:
        "https:\/\/img.bwfbadminton.com\/image\/upload\/t_96_Fansite_Homepage_Tourament_Header_medium\/v1673239194\/assets\/tournaments\/header\/8B1531C0-63EC-4C45-A3EF-AA8D2CDF7115.png",
      progress: "finished",
    },
    {
      start_date: "2023-03-21 00:00:00",
      end_date: "2023-03-26 00:00:00",
      name: "YONEX Swiss Open 2023",
      url: "https:\/\/bwfworldtour.bwfbadminton.com\/tournament\/4705\/yonex-swiss-open-2023\/results\/",
      date: "21  - 26 Mar",
      location: "Basel, Switzerland",
      logo: "https:\/\/extranet.bwfbadminton.com\/docs\/events\/4705\/logo-colour\/yonex_swiss_open_2023.svg",
      cat_logo:
        "https:\/\/bwfbadminton.com\/wp-content\/themes\/fansite-2020\/assets\/images\/tournament\/suffix_300_white-01.svg",
      header_url:
        "https:\/\/img.bwfbadminton.com\/image\/upload\/t_96_Fansite_Homepage_Tourament_Header_medium\/v1673239294\/assets\/tournaments\/header\/FA9435EC-E58A-40EC-8BE1-1C92C487B6B3.png",
      progress: "finished",
    },
    {
      start_date: "2023-03-28 00:00:00",
      end_date: "2023-04-02 23:59:59",
      name: "Madrid Spain Masters 2023",
      url: "https:\/\/bwfworldtour.bwfbadminton.com\/tournament\/4706\/madrid-spain-masters-2023\/results\/",
      date: "28 Mar - 02 Apr",
      location: "Madrid, Spain",
      logo: "https:\/\/extranet.bwfbadminton.com\/docs\/events\/4706\/logo-colour\/Spain_Masters_2023.svg",
      cat_logo:
        "https:\/\/bwfbadminton.com\/wp-content\/themes\/fansite-2020\/assets\/images\/tournament\/suffix_300_white-01.svg",
      header_url:
        "https:\/\/img.bwfbadminton.com\/image\/upload\/t_96_Fansite_Homepage_Tourament_Header_medium\/v1673239352\/assets\/tournaments\/header\/66AD080B-83CD-461D-809B-F47F47D66EA3.png",
      progress: "finished",
    },
    {
      start_date: "2023-04-04 00:00:00",
      end_date: "2023-04-09 23:59:59",
      name: "Orl\u00e9ans Masters Badminton 2023 presented by VICTOR",
      url: "https:\/\/bwfworldtour.bwfbadminton.com\/tournament\/4707\/orleans-masters-badminton-2023-presented-by-victor\/results\/",
      date: "04  - 09 Apr",
      location: "Orleans, France",
      logo: "https:\/\/extranet.bwfbadminton.com\/docs\/events\/4707\/logo-colour\/Orleans_Masters_2023.svg",
      cat_logo:
        "https:\/\/bwfbadminton.com\/wp-content\/themes\/fansite-2020\/assets\/images\/tournament\/suffix_300_white-01.svg",
      header_url:
        "https:\/\/img.bwfbadminton.com\/image\/upload\/t_96_Fansite_Homepage_Tourament_Header_medium\/v1673239455\/assets\/tournaments\/header\/9ABED7DB-59A0-4278-8C49-CAE28C17DF18.png",
      progress: "finished",
    },
    {
      start_date: "2023-05-14 00:00:00",
      end_date: "2023-05-21 23:59:59",
      name: "TotalEnergies BWF Sudirman Cup Finals 2023",
      url: "https:\/\/bwfsudirmancup.bwfbadminton.com\/results\/4708\/totalenergies-bwf-sudirman-cup-finals-2023",
      date: "14  - 21 May",
      location: "Suzhou, China",
      logo: "https:\/\/extranet.bwfbadminton.com\/docs\/events\/4708\/logo-colour\/TotalEnergies_BWF_Sudirman Cup_2023.svg",
      cat_logo: "",
      header_url:
        "https:\/\/img.bwfbadminton.com\/image\/upload\/t_96_Fansite_Homepage_Tourament_Header_medium\/v1673239570\/assets\/tournaments\/header\/A8920452-3D1B-4964-ABD7-6AC0E6AC3CCC.png",
      progress: "finished",
    },
    {
      start_date: "2023-05-23 00:00:00",
      end_date: "2023-05-28 23:59:59",
      name: "PERODUA Malaysia Masters 2023 presented by DAIHATSU",
      url: "https:\/\/bwfworldtour.bwfbadminton.com\/tournament\/4709\/perodua-malaysia-masters-2023-presented-by-daihatsu\/results\/",
      date: "23  - 28 May",
      location: "Kuala Lumpur, Malaysia",
      logo: "https:\/\/extranet.bwfbadminton.com\/docs\/events\/4709\/logo-colour\/Malaysia_Masters_2023.svg",
      cat_logo:
        "https:\/\/bwfbadminton.com\/wp-content\/themes\/fansite-2020\/assets\/images\/tournament\/suffix_500_white-01.svg",
      header_url:
        "https:\/\/img.bwfbadminton.com\/image\/upload\/t_96_Fansite_Homepage_Tourament_Header_medium\/v1673239643\/assets\/tournaments\/header\/348FA0E2-708B-457A-A231-FC7B8062D198.png",
      progress: "finished",
    },
    {
      start_date: "2023-05-30 00:00:00",
      end_date: "2023-06-04 23:59:59",
      name: "TOYOTA GAZOO RACING Thailand Open 2023",
      url: "https:\/\/bwfworldtour.bwfbadminton.com\/tournament\/4710\/toyota-gazoo-racing-thailand-open-2023\/results\/",
      date: "30 May - 04 Jun",
      location: "Bangkok, Thailand",
      logo: "https:\/\/extranet.bwfbadminton.com\/docs\/events\/4710\/logo-colour\/Thailand Open_2023.svg",
      cat_logo:
        "https:\/\/bwfbadminton.com\/wp-content\/themes\/fansite-2020\/assets\/images\/tournament\/suffix_500_white-01.svg",
      header_url:
        "https:\/\/img.bwfbadminton.com\/image\/upload\/t_96_Fansite_Homepage_Tourament_Header_medium\/v1673239704\/assets\/tournaments\/header\/C7843321-98C9-4E4B-B8E0-52383E49F256.png",
      progress: "finished",
    },
    {
      start_date: "2023-06-06 00:00:00",
      end_date: "2023-06-11 23:59:59",
      name: "KFF Singapore Open 2023",
      url: "https:\/\/bwfworldtour.bwfbadminton.com\/tournament\/4711\/kff-singapore-open-2023\/results\/",
      date: "06  - 11 Jun",
      location: "Singapore, Singapore",
      logo: "https:\/\/extranet.bwfbadminton.com\/docs\/events\/4711\/logo-colour\/Singapore_Open_2023-2.png",
      cat_logo:
        "https:\/\/bwfbadminton.com\/wp-content\/themes\/fansite-2020\/assets\/images\/tournament\/suffix_750_white-01.svg",
      header_url:
        "https:\/\/img.bwfbadminton.com\/image\/upload\/t_96_Fansite_Homepage_Tourament_Header_medium\/v1673239783\/assets\/tournaments\/header\/10DDD177-0DDD-4B02-B310-5913F127F97F.png",
      progress: "finished",
    },
    {
      start_date: "2023-06-13 00:00:00",
      end_date: "2023-06-18 23:59:59",
      name: "Kapal Api Group Indonesia Open 2023",
      url: "https:\/\/bwfworldtour.bwfbadminton.com\/tournament\/4712\/kapal-api-group-indonesia-open-2023\/results\/",
      date: "13  - 18 Jun",
      location: "Jakarta, Indonesia",
      logo: "https:\/\/extranet.bwfbadminton.com\/docs\/events\/4712\/logo-colour\/Indonesia-Open-2023.svg",
      cat_logo:
        "https:\/\/bwfbadminton.com\/wp-content\/themes\/fansite-2020\/assets\/images\/tournament\/suffix_1000_white-01.svg",
      header_url:
        "https:\/\/img.bwfbadminton.com\/image\/upload\/t_96_Fansite_Homepage_Tourament_Header_medium\/v1673239862\/assets\/tournaments\/header\/1A870AD1-262D-4D3A-BAF4-0C425D12A25B.png",
      progress: "future",
    },
    {
      start_date: "2023-06-20 00:00:00",
      end_date: "2023-06-25 23:59:59",
      name: "YONEX Taipei Open 2023",
      url: "https:\/\/bwfworldtour.bwfbadminton.com\/tournament\/4713\/yonex-taipei-open-2023\/results\/",
      date: "20  - 25 Jun",
      location: "Taipei, Chinese Taipei",
      logo: "https:\/\/extranet.bwfbadminton.com\/docs\/events\/4713\/logo-colour\/taipei_open_2023.svg",
      cat_logo:
        "https:\/\/bwfbadminton.com\/wp-content\/themes\/fansite-2020\/assets\/images\/tournament\/suffix_300_white-01.svg",
      header_url:
        "https:\/\/img.bwfbadminton.com\/image\/upload\/t_96_Fansite_Homepage_Tourament_Header_medium\/v1673241113\/assets\/tournaments\/header\/CBD852BD-5983-423E-AD8F-1E0A4D513175.png",
      progress: "future",
    },
    {
      start_date: "2023-07-04 00:00:00",
      end_date: "2023-07-09 23:59:59",
      name: "YONEX Canada Open 2023",
      url: "https:\/\/bwfworldtour.bwfbadminton.com\/tournament\/4714\/yonex-canada-open-2023\/results\/",
      date: "04  - 09 Jul",
      location: "Calgary, Canada",
      logo: "https:\/\/extranet.bwfbadminton.com\/docs\/events\/4714\/logo-colour\/canada_open_2023.svg",
      cat_logo:
        "https:\/\/bwfbadminton.com\/wp-content\/themes\/fansite-2020\/assets\/images\/tournament\/suffix_500_white-01.svg",
      header_url:
        "https:\/\/img.bwfbadminton.com\/image\/upload\/t_96_Fansite_Homepage_Tourament_Header_medium\/v1673241184\/assets\/tournaments\/header\/9853068E-A5D5-4F22-B902-E7135553B0BC.png",
      progress: "future",
    },
    {
      start_date: "2023-07-11 00:00:00",
      end_date: "2023-07-16 23:59:59",
      name: "YONEX US Open 2023",
      url: "https:\/\/bwfworldtour.bwfbadminton.com\/tournament\/4715\/yonex-us-open-2023\/results\/",
      date: "11  - 16 Jul",
      location: "Council Bluffs, USA",
      logo: "https:\/\/extranet.bwfbadminton.com\/docs\/events\/4715\/logo-colour\/Placeholder Logo_1.svg",
      cat_logo:
        "https:\/\/bwfbadminton.com\/wp-content\/themes\/fansite-2020\/assets\/images\/tournament\/suffix_300_white-01.svg",
      header_url:
        "https:\/\/img.bwfbadminton.com\/image\/upload\/t_96_Fansite_Homepage_Tourament_Header_medium\/v1673241252\/assets\/tournaments\/header\/B14BC45C-586E-4DA4-AC3C-BE7526CBF886.png",
      progress: "future",
    },
    {
      start_date: "2023-07-18 00:00:00",
      end_date: "2023-07-23 23:59:59",
      name: "Korea Open 2023",
      url: "https:\/\/bwfworldtour.bwfbadminton.com\/tournament\/4716\/korea-open-2023\/results\/",
      date: "18  - 23 Jul",
      location: "Yeosu, Korea",
      logo: "https:\/\/extranet.bwfbadminton.com\/docs\/events\/4716\/logo-colour\/Korea-Open-2023.svg",
      cat_logo:
        "https:\/\/bwfbadminton.com\/wp-content\/themes\/fansite-2020\/assets\/images\/tournament\/suffix_500_white-01.svg",
      header_url:
        "https:\/\/img.bwfbadminton.com\/image\/upload\/t_96_Fansite_Homepage_Tourament_Header_medium\/v1673241307\/assets\/tournaments\/header\/3BAC1D8B-1C03-452C-A237-00D0A5C8A629.png",
      progress: "future",
    },
    {
      start_date: "2023-07-25 00:00:00",
      end_date: "2023-07-30 23:59:59",
      name: "DAIHATSU Japan Open 2023",
      url: "https:\/\/bwfworldtour.bwfbadminton.com\/tournament\/4717\/daihatsu-japan-open-2023\/results\/",
      date: "25  - 30 Jul",
      location: "Tokyo, Japan",
      logo: "https:\/\/extranet.bwfbadminton.com\/docs\/events\/4717\/logo-colour\/Japan-Open-2023.svg",
      cat_logo:
        "https:\/\/bwfbadminton.com\/wp-content\/themes\/fansite-2020\/assets\/images\/tournament\/suffix_750_white-01.svg",
      header_url:
        "https:\/\/img.bwfbadminton.com\/image\/upload\/t_96_Fansite_Homepage_Tourament_Header_medium\/v1673241349\/assets\/tournaments\/header\/409CECE5-25E3-40D4-AF25-746D5D7689F3.png",
      progress: "future",
    },
    {
      start_date: "2023-08-01 00:00:00",
      end_date: "2023-08-06 23:59:59",
      name: "SATHIO GROUP Australian Open 2023",
      url: "https:\/\/bwfworldtour.bwfbadminton.com\/tournament\/4718\/sathio-group-australian-open-2023\/results\/",
      date: "01  - 06 Aug",
      location: "Sydney, Australia",
      logo: "https:\/\/extranet.bwfbadminton.com\/docs\/events\/4718\/logo-colour\/Australia_Badminton_Open_2023.svg",
      cat_logo:
        "https:\/\/bwfbadminton.com\/wp-content\/themes\/fansite-2020\/assets\/images\/tournament\/suffix_500_white-01.svg",
      header_url:
        "https:\/\/img.bwfbadminton.com\/image\/upload\/t_96_Fansite_Homepage_Tourament_Header_medium\/v1673241409\/assets\/tournaments\/header\/EBD7191D-6280-4056-979A-83EAE1328B35.png",
      progress: "future",
    },
    {
      start_date: "2023-08-21 00:00:00",
      end_date: "2023-08-27 00:00:00",
      name: "TotalEnergies BWF World Championships 2023",
      url: "https:\/\/bwfbadminton.com\/tournament\/4720\/totalenergies-bwf-world-championships-2023",
      date: "21  - 27 Aug",
      location: "Copenhagen, Denmark",
      logo: "https:\/\/extranet.bwfbadminton.com\/docs\/events\/4720\/logo-colour\/TotalEnergies_BWF_World Championships_2023.svg",
      cat_logo: "",
      header_url:
        "https:\/\/img.bwfbadminton.com\/image\/upload\/t_96_Fansite_Homepage_Tourament_Header_medium\/v1673241525\/assets\/tournaments\/header\/F4169AF2-1EE8-4976-96CE-8D24E664BCFD.png",
      progress: "future",
    },
    {
      start_date: "2023-09-05 00:00:00",
      end_date: "2023-09-10 00:00:00",
      name: "China Open 2023",
      url: "https:\/\/bwfworldtour.bwfbadminton.com\/tournament\/4721\/china-open-2023\/results\/",
      date: "05  - 10 Sep",
      location: "Changzhou, China",
      logo: "https:\/\/extranet.bwfbadminton.com\/docs\/events\/4721\/logo-colour\/Placeholder Logo_1.svg",
      cat_logo:
        "https:\/\/bwfbadminton.com\/wp-content\/themes\/fansite-2020\/assets\/images\/tournament\/suffix_1000_white-01.svg",
      header_url:
        "https:\/\/img.bwfbadminton.com\/image\/upload\/t_96_Fansite_Homepage_Tourament_Header_medium\/v1673241576\/assets\/tournaments\/header\/05883743-A911-4C4D-9901-5BBEEF2A6E34.png",
      progress: "future",
    },
    {
      start_date: "2023-09-05 00:00:00",
      end_date: "2023-09-10 23:59:59",
      name: "BNI Indonesia Masters I 2023",
      url: "https:\/\/bwfbadminton.com\/tournament\/4856\/bni-indonesia-masters-i-2023",
      date: "05  - 10 Sep",
      location: "Medan, Indonesia",
      logo: "https:\/\/extranet.bwfbadminton.com\/docs\/events\/4856\/logo-colour\/Placeholder Logo_2.svg",
      cat_logo:
        "https:\/\/bwfbadminton.com\/wp-content\/themes\/fansite-2020\/assets\/images\/tournament\/suffix_100_white-01.svg",
      header_url:
        "https:\/\/extranet.bwfbadminton.com\/images\/player-hero-01.jpg",
      progress: "future",
    },
    {
      start_date: "2023-09-11 00:00:00",
      end_date: "2023-09-17 23:59:59",
      name: "JEONJU BWF World Senior Championships 2023",
      url: "https:\/\/bwfbadminton.com\/tournament\/4722\/jeonju-bwf-world-senior-championships-2023",
      date: "11  - 17 Sep",
      location: "Jeonju, Korea",
      logo: "https:\/\/extranet.bwfbadminton.com\/docs\/events\/4722\/logo-colour\/WSC-2023.svg",
      cat_logo: "",
      header_url:
        "https:\/\/img.bwfbadminton.com\/image\/upload\/t_96_Fansite_Homepage_Tourament_Header_medium\/v1673241635\/assets\/tournaments\/header\/8B82FCD4-48CF-4010-BCDD-DE2600AEF2E7.png",
      progress: "future",
    },
    {
      start_date: "2023-09-12 00:00:00",
      end_date: "2023-09-17 00:00:00",
      name: "Hong Kong Open 2023",
      url: "https:\/\/bwfworldtour.bwfbadminton.com\/tournament\/4723\/hong-kong-open-2023\/results\/",
      date: "12  - 17 Sep",
      location: "Hong Kong, Hong Kong China",
      logo: "https:\/\/extranet.bwfbadminton.com\/docs\/events\/4723\/logo-colour\/Placeholder Logo_1.svg",
      cat_logo:
        "https:\/\/bwfbadminton.com\/wp-content\/themes\/fansite-2020\/assets\/images\/tournament\/suffix_500_white-01.svg",
      header_url:
        "https:\/\/img.bwfbadminton.com\/image\/upload\/t_96_Fansite_Homepage_Tourament_Header_medium\/v1673241682\/assets\/tournaments\/header\/6F0CEBA9-84D2-44D9-85B8-007EED86A95F.png",
      progress: "future",
    },
    {
      start_date: "2023-09-12 00:00:00",
      end_date: "2023-09-17 00:00:00",
      name: "Vietnam Open 2023",
      url: "https:\/\/bwfbadminton.com\/tournament\/4857\/vietnam-open-2023",
      date: "12  - 17 Sep",
      location: "Ho Chi Minh City, Vietnam",
      logo: "https:\/\/extranet.bwfbadminton.com\/docs\/events\/4857\/logo-colour\/Placeholder Logo_2.svg",
      cat_logo:
        "https:\/\/bwfbadminton.com\/wp-content\/themes\/fansite-2020\/assets\/images\/tournament\/suffix_100_white-01.svg",
      header_url:
        "https:\/\/img.bwfbadminton.com\/image\/upload\/t_96_Fansite_Homepage_Tourament_Header_medium\/v1673241725\/assets\/tournaments\/header\/97172C3A-4435-4816-AEDE-0F1787B1589B.png",
      progress: "future",
    },
    {
      start_date: "2023-09-26 00:00:00",
      end_date: "2023-10-01 00:00:00",
      name: "Kaohsiung Open Super 100 2023",
      url: "https:\/\/bwfbadminton.com\/tournament\/4858\/kaohsiung-open-super-100-2023",
      date: "26 Sep - 01 Oct",
      location: "Kaohsiung, Chinese Taipei",
      logo: "https:\/\/extranet.bwfbadminton.com\/docs\/events\/4858\/logo-colour\/Placeholder Logo_2.svg",
      cat_logo:
        "https:\/\/bwfbadminton.com\/wp-content\/themes\/fansite-2020\/assets\/images\/tournament\/suffix_100_white-01.svg",
      header_url:
        "https:\/\/img.bwfbadminton.com\/image\/upload\/t_96_Fansite_Homepage_Tourament_Header_medium\/v1673241785\/assets\/tournaments\/header\/46F5BDD6-8136-4529-B53B-301F948F56AB.png",
      progress: "future",
    },
    {
      start_date: "2023-10-10 00:00:00",
      end_date: "2023-10-15 23:59:59",
      name: "CLASH OF CLANS Arctic Open 2023 powered by YONEX",
      url: "https:\/\/bwfworldtour.bwfbadminton.com\/tournament\/4726\/clash-of-clans-arctic-open-2023-powered-by-yonex\/results\/",
      date: "10  - 15 Oct",
      location: "Vantaa, Finland",
      logo: "https:\/\/extranet.bwfbadminton.com\/docs\/events\/4726\/logo-colour\/Arctic Open.svg",
      cat_logo:
        "https:\/\/bwfbadminton.com\/wp-content\/themes\/fansite-2020\/assets\/images\/tournament\/suffix_500_white-01.svg",
      header_url:
        "https:\/\/img.bwfbadminton.com\/image\/upload\/t_96_Fansite_Homepage_Tourament_Header_medium\/v1673241834\/assets\/tournaments\/header\/91CF9351-372A-4336-9E69-0366D53C7F63.png",
      progress: "future",
    },
    {
      start_date: "2023-10-17 00:00:00",
      end_date: "2023-10-22 23:59:59",
      name: "Denmark Open 2023 presented by VICTOR",
      url: "https:\/\/bwfworldtour.bwfbadminton.com\/tournament\/4727\/denmark-open-2023-presented-by-victor\/results\/",
      date: "17  - 22 Oct",
      location: "Odense, Denmark",
      logo: "https:\/\/extranet.bwfbadminton.com\/docs\/events\/4727\/logo-colour\/denmark_open_2023.svg",
      cat_logo:
        "https:\/\/bwfbadminton.com\/wp-content\/themes\/fansite-2020\/assets\/images\/tournament\/suffix_750_white-01.svg",
      header_url:
        "https:\/\/img.bwfbadminton.com\/image\/upload\/t_96_Fansite_Homepage_Tourament_Header_medium\/v1673241869\/assets\/tournaments\/header\/807D32BF-F1D2-4277-8A5F-C2064EE59D33.png",
      progress: "future",
    },
    {
      start_date: "2023-10-17 00:00:00",
      end_date: "2023-10-22 00:00:00",
      name: "Abu Dhabi Masters 2023",
      url: "https:\/\/bwfbadminton.com\/tournament\/4859\/abu-dhabi-masters-2023",
      date: "17  - 22 Oct",
      location: "Abu Dhabi, United Arab Emirates",
      logo: "https:\/\/extranet.bwfbadminton.com\/docs\/events\/4859\/logo-colour\/Placeholder Logo_2.svg",
      cat_logo:
        "https:\/\/bwfbadminton.com\/wp-content\/themes\/fansite-2020\/assets\/images\/tournament\/suffix_100_white-01.svg",
      header_url:
        "https:\/\/img.bwfbadminton.com\/image\/upload\/t_96_Fansite_Homepage_Tourament_Header_medium\/v1673241905\/assets\/tournaments\/header\/589BDBAB-81BB-4A46-9247-38052BA0574B.png",
      progress: "future",
    },
    {
      start_date: "2023-10-24 00:00:00",
      end_date: "2023-10-29 23:59:59",
      name: "YONEX French Open 2023",
      url: "https:\/\/bwfworldtour.bwfbadminton.com\/tournament\/4728\/yonex-french-open-2023\/results\/",
      date: "24  - 29 Oct",
      location: "Rennes, France",
      logo: "https:\/\/extranet.bwfbadminton.com\/docs\/events\/4728\/logo-colour\/French_Open_2023.svg",
      cat_logo:
        "https:\/\/bwfbadminton.com\/wp-content\/themes\/fansite-2020\/assets\/images\/tournament\/suffix_750_white-01.svg",
      header_url:
        "https:\/\/img.bwfbadminton.com\/image\/upload\/t_96_Fansite_Homepage_Tourament_Header_medium\/v1673241941\/assets\/tournaments\/header\/872B6C77-9964-486A-997A-1E0C78D4D54C.png",
      progress: "future",
    },
    {
      start_date: "2023-10-24 00:00:00",
      end_date: "2023-10-29 23:59:59",
      name: "BNI Indonesia Masters II 2023",
      url: "https:\/\/bwfbadminton.com\/tournament\/4860\/bni-indonesia-masters-ii-2023",
      date: "24  - 29 Oct",
      location: "Surabaya, Indonesia",
      logo: "https:\/\/extranet.bwfbadminton.com\/docs\/events\/4860\/logo-colour\/Placeholder Logo_2.svg",
      cat_logo:
        "https:\/\/bwfbadminton.com\/wp-content\/themes\/fansite-2020\/assets\/images\/tournament\/suffix_100_white-01.svg",
      header_url:
        "https:\/\/extranet.bwfbadminton.com\/images\/player-hero-01.jpg",
      progress: "future",
    },
    {
      start_date: "2023-10-31 00:00:00",
      end_date: "2023-11-05 00:00:00",
      name: "Hylo Open 2023",
      url: "https:\/\/bwfworldtour.bwfbadminton.com\/tournament\/4729\/hylo-open-2023\/results\/",
      date: "31 Oct - 05 Nov",
      location: "Saarbrucken, Germany",
      logo: "https:\/\/extranet.bwfbadminton.com\/docs\/events\/4729\/logo-colour\/Placeholder Logo_1.svg",
      cat_logo:
        "https:\/\/bwfbadminton.com\/wp-content\/themes\/fansite-2020\/assets\/images\/tournament\/suffix_300_white-01.svg",
      header_url:
        "https:\/\/img.bwfbadminton.com\/image\/upload\/t_96_Fansite_Homepage_Tourament_Header_medium\/v1673241983\/assets\/tournaments\/header\/495403C2-04D0-462D-B44B-946FFE586259.png",
      progress: "future",
    },
    {
      start_date: "2023-10-31 00:00:00",
      end_date: "2023-11-05 00:00:00",
      name: "Malaysia Super 100 2023",
      url: "https:\/\/bwfbadminton.com\/tournament\/4861\/malaysia-super-100-2023",
      date: "31 Oct - 05 Nov",
      location: "TBC, Malaysia",
      logo: "https:\/\/extranet.bwfbadminton.com\/docs\/events\/4861\/logo-colour\/Placeholder Logo_2.svg",
      cat_logo:
        "https:\/\/bwfbadminton.com\/wp-content\/themes\/fansite-2020\/assets\/images\/tournament\/suffix_100_white-01.svg",
      header_url:
        "https:\/\/extranet.bwfbadminton.com\/images\/player-hero-01.jpg",
      progress: "future",
    },

    {
      start_date: "2023-11-07 00:00:00",
      end_date: "2023-11-12 00:00:00",
      name: "Korea Masters 2023",
      url: "https:\/\/bwfworldtour.bwfbadminton.com\/tournament\/4730\/korea-masters-2023\/results\/",
      date: "07  - 12 Nov",
      location: "Gwangju, Korea",
      logo: "https:\/\/extranet.bwfbadminton.com\/docs\/events\/4730\/logo-colour\/Placeholder Logo_1.svg",
      cat_logo:
        "https:\/\/bwfbadminton.com\/wp-content\/themes\/fansite-2020\/assets\/images\/tournament\/suffix_300_white-01.svg",
      header_url:
        "https:\/\/img.bwfbadminton.com\/image\/upload\/t_96_Fansite_Homepage_Tourament_Header_medium\/v1673242044\/assets\/tournaments\/header\/D5F3A8C9-715E-475F-999D-3DA0402524BC.png",
      progress: "future",
    },
    {
      start_date: "2023-11-14 00:00:00",
      end_date: "2023-11-19 23:59:59",
      name: "Kumamoto Masters Japan 2023",
      url: "https:\/\/bwfworldtour.bwfbadminton.com\/tournament\/4731\/kumamoto-masters-japan-2023\/results\/",
      date: "14  - 19 Nov",
      location: "Kumamoto, Japan",
      logo: "https:\/\/extranet.bwfbadminton.com\/docs\/events\/4731\/logo-colour\/Placeholder Logo_1.svg",
      cat_logo:
        "https:\/\/bwfbadminton.com\/wp-content\/themes\/fansite-2020\/assets\/images\/tournament\/suffix_500_white-01.svg",
      header_url:
        "https:\/\/img.bwfbadminton.com\/image\/upload\/t_96_Fansite_Homepage_Tourament_Header_medium\/v1673242083\/assets\/tournaments\/header\/A1D5007B-9E91-46BC-B9C7-5C72487AC285.png",
      progress: "future",
    },
    {
      start_date: "2023-11-21 00:00:00",
      end_date: "2023-11-26 00:00:00",
      name: "China Masters 2023",
      url: "https:\/\/bwfworldtour.bwfbadminton.com\/tournament\/4732\/china-masters-2023\/results\/",
      date: "21  - 26 Nov",
      location: "Shenzhen, China",
      logo: "https:\/\/extranet.bwfbadminton.com\/docs\/events\/4732\/logo-colour\/Placeholder Logo_1.svg",
      cat_logo:
        "https:\/\/bwfbadminton.com\/wp-content\/themes\/fansite-2020\/assets\/images\/tournament\/suffix_750_white-01.svg",
      header_url:
        "https:\/\/img.bwfbadminton.com\/image\/upload\/t_96_Fansite_Homepage_Tourament_Header_medium\/v1673242125\/assets\/tournaments\/header\/881CF019-F35B-4DE1-AC27-ED5622688895.png",
      progress: "future",
    },
    {
      start_date: "2023-11-28 00:00:00",
      end_date: "2023-12-03 00:00:00",
      name: "Syed Modi India International 2023",
      url: "https:\/\/bwfworldtour.bwfbadminton.com\/tournament\/4733\/syed-modi-india-international-2023\/results\/",
      date: "28 Nov - 03 Dec",
      location: "Lucknow, India",
      logo: "https:\/\/extranet.bwfbadminton.com\/docs\/events\/4733\/logo-colour\/Syed Modi_2023.svg",
      cat_logo:
        "https:\/\/bwfbadminton.com\/wp-content\/themes\/fansite-2020\/assets\/images\/tournament\/suffix_300_white-01.svg",
      header_url:
        "https:\/\/img.bwfbadminton.com\/image\/upload\/t_96_Fansite_Homepage_Tourament_Header_medium\/v1673242158\/assets\/tournaments\/header\/D49F84F0-BB0A-4C34-BB76-FD6809B331FD.png",
      progress: "future",
    },
    {
      start_date: "2023-12-05 00:00:00",
      end_date: "2023-12-10 23:59:59",
      name: "India Super 100 I 2023",
      url: "https:\/\/bwfbadminton.com\/tournament\/4862\/india-super-100-i-2023",
      date: "05  - 10 Dec",
      location: "Guwahati, Assam, India",
      logo: "https:\/\/extranet.bwfbadminton.com\/docs\/events\/4862\/logo-colour\/Placeholder Logo_2.svg",
      cat_logo:
        "https:\/\/bwfbadminton.com\/wp-content\/themes\/fansite-2020\/assets\/images\/tournament\/suffix_100_white-01.svg",
      header_url:
        "https:\/\/extranet.bwfbadminton.com\/images\/player-hero-01.jpg",
      progress: "future",
    },
    {
      start_date: "2023-12-12 00:00:00",
      end_date: "2023-12-17 23:59:59",
      name: "India Super 100 II 2023",
      url: "https:\/\/bwfbadminton.com\/tournament\/4863\/india-super-100-ii-2023",
      date: "12  - 17 Dec",
      location: "Cuttack, Odisha, India",
      logo: "https:\/\/extranet.bwfbadminton.com\/docs\/events\/4863\/logo-colour\/Placeholder Logo_2.svg",
      cat_logo:
        "https:\/\/bwfbadminton.com\/wp-content\/themes\/fansite-2020\/assets\/images\/tournament\/suffix_100_white-01.svg",
      header_url:
        "https:\/\/extranet.bwfbadminton.com\/images\/player-hero-01.jpg",
      progress: "future",
    },
    {
      start_date: "2023-12-13 00:00:00",
      end_date: "2023-12-17 23:59:59",
      name: "HSBC BWF World Tour Finals 2023",
      url: "https:\/\/bwfworldtourfinals.bwfbadminton.com\/results\/4734\/hsbc-bwf-world-tour-finals-2023",
      date: "13  - 17 Dec",
      location: "Tbc",
      logo: "https:\/\/extranet.bwfbadminton.com\/docs\/events\/4734\/logo-colour\/world_tour_finals.svg",
      cat_logo:
        "https:\/\/bwfbadminton.com\/wp-content\/themes\/fansite-2020\/assets\/images\/tournament\/suffix_final_white-01.svg",
      header_url:
        "https:\/\/extranet.bwfbadminton.com\/images\/player-hero-01.jpg",
      progress: "future",
    },
  ];
}
getList();
</script>
<style scoped lang="less">
.match-list {
  display: flex;
  flex-direction: column;
  .match-item {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 20px;
    margin-bottom: 20px;
    border: 1px solid #eee;
    .match-logo {
      width: 200px;
      height: 200px;
      margin-right: 20px;
    }
    .match-info {
      flex: 1;
      h3 {
        font-size: 30px;
        margin-bottom: 20px;
      }
      .match-meta {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        span {
          margin-right: 20px;
          font-size: 20px;
          opacity: 0.65;
        }
      }
    }
  }
}
</style>
