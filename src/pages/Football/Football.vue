<script setup lang="ts">
import Information from "@/components/Information/Information.vue";
import Button from "@/UI/Button/Button.vue";
import Table from "@/UI/Table/Table.vue";
import ContentSidebar from "@/components/ContentSidebar/ContentSidebar.vue";
import TableInfo from "@/components/TableInfo/TableInfo.vue"
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

const teams = ref([]);
const generalInfo = ref([]);
const dataLoaded = ref(false);

async function getData() {
  const url = "https://63ee0ec0388920150dd83e3c.mockapi.io/teams";
  try {
    const responce = await fetch(url);

    if (!responce.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await responce.json();

    teams.value = data;
    dataLoaded.value = true;
  } catch (error) {
    console.error(error.message);
  }
}

async function getGeneralData() {
  const url = "/data/generalTable.json";

  try {
    const responce = await fetch(url);

    if (!responce.ok) {
      throw new Error("Network response was not ok");
    }

    const generalData = await responce.json();

    generalInfo.value = generalData;
  } catch (error) {
    console.error(error.message);
  }
}



function separationOnGroup(value: any[]) {
  const groups: Record<string, any[]> = {};

  for (const team of value) {
    if (!groups[team.group]) {
      groups[team.group] = [];
    }

    groups[team.group].push(team);
  }

  return groups;
}

const groupTeams = computed(() => separationOnGroup(teams.value || []));
const generalGroupTeams = computed(() => separationOnGroup(generalInfo.value || []));


const headerTitlePC = ["Игры", "В", "Н", "П", "З - П", "Форма", "Очки"];
const headerTitleMobile = ["И", "В", "Н", "П", "З - П", "Ф", "О"];

const headerTitle = ref(headerTitlePC);

function updateHeaderTitle() {
  if(window.innerWidth > 767) {
    headerTitle.value = headerTitlePC
  } else {
    headerTitle.value = headerTitleMobile
  }
}

const tabTitle = [
  { id: 1, name: "Общая" },
  { id: 2, name: "Дома" },
  { id: 3, name: "В гостях" },
];

const selectedIndex = ref(0);

function selectedTab(i: number) {
  selectedIndex.value = i;

  this.tabTitle.forEach((tab: any, index: number) => {
    tab.isActive = i === index;
  });

  if(((selectedIndex.value === 1 || selectedIndex.value === 2) && !dataLoaded.value)) {
    getData();
  }
}

onMounted(() => {
  getGeneralData();
  window.addEventListener('resize', updateHeaderTitle)
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateHeaderTitle);
});
</script>

<template lang="html">
  <div class="page">
    <div class="container">
      <div class="page-inner flex">
        <div class="page-content">
          <Information />

          <div class="results mb-6">
            <div class="results__header flex justify-between md:items-center md:mb-3 mb-4 md:flex-row flex-col items-start">
              <div class="results__title text-lg font-bold md:mb-0 mb-[9px]">
                Турнирная таблица
              </div>
              <div class="results__buttons flex gap-x-1.5">
                <Button
                  v-for="(tab, index) in tabTitle"
                  :key="tab.id"
                  type="button"
                  :class="[
                    'results__button',
                    { active: index == selectedIndex },
                  ]"
                  @click="selectedTab(index)"
                  >{{ tab.name }}</Button
                >
              </div>
            </div>

            <div class="results__body">
              <div class="results__table" v-show="selectedIndex === 0">
                <div>
                  <Table
                    v-for="(groupTeam, groupName) in generalGroupTeams"
                    :groupTeam="groupTeam"
                    :groupName="groupName"
                    :key="groupName"
                    :headerTitle="headerTitle"
                  />
                </div>
              </div>
              <div class="results__table" v-show="selectedIndex === 1">
                <Table
                  v-for="(groupTeam, groupName) in groupTeams"
                  :groupTeam="groupTeam"
                  :groupName="groupName"
                  :key="groupName"
                  :headerTitle="headerTitle"
                />
              </div>
              <div class="results__table" v-show="selectedIndex === 2">
                <Table
                  v-for="(groupTeam, groupName) in groupTeams"
                  :groupTeam="groupTeam"
                  :groupName="groupName"
                  :key="groupName"
                  :headerTitle="headerTitle"
                />
              </div>
            </div>
          </div>

          <TableInfo />
        </div>

        <div class="sidebar">
          <ContentSidebar />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .sidebar {
    max-width: 300px;
    flex: 0 0 300px;
    @media(max-width: 1024px) {
      max-width: 100%;
      flex: 0 0 100%;
    }
  }
  .page-content {
    flex: auto;
    margin-right: 24px;
    @media(max-width: 1024px) {
      margin: 0 0 34px;
    }
  }

.results__button {
  padding: 4px 12px;
  border-radius: 6px;
  background: rgba(95, 120, 137, 0.08);
  line-height: 24px;
  &.active {
    background: #fadb00;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.9);
  }
}

@media(max-width: 767px) {
.results__body {
  margin: 0 -12px;
}
}



@media (max-width: 1024px) {
  .page-inner {
    flex-direction: column;
  }
}

</style>
