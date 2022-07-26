<template>
  <nav v-if="props.show" class="nav-bar">
    <router-link :to="{ name: 'home' }" class="title">
      {{ $t("components.navs.navBar.title") }}
    </router-link>

    <div class="menu">
      <ul class="menu-items">
        <li class="item">
          <router-link :to="{ name: 'boards' }" class="menu-link">
            {{ $t("components.navs.navBar.menuItems.boards") }}
          </router-link>
        </li>
      </ul>

      <a class="profile">
        <img :src="placeholder" class="avatar" />

        <div class="actions">
          <p class="font-extrabold text-lime-100 whitespace-nowrap">{{ sessionStore.getCurrentUser.name }}</p>
          <a class="action" @click="handleLogout">
            {{ $t("components.navs.navBar.profile.actions.logout") }}
          </a>
        </div>
      </a>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { RouterLink } from "vue-router";
import placeholder from "@/assets/user_placeholder.png";
import { useSessionStore } from "@/stores/session";

const sessionStore = useSessionStore();
const emit = defineEmits(["logout"]);

const props = defineProps({
  show: Boolean,
});

const handleLogout = () => {
  emit("logout");
};
</script>

<style lang="scss" scoped>
.nav-bar {
  display: flex;
  width: 100%;
  align-items: center;
  background-color: #74b9ff;

  .title {
    text-decoration: none;
    font-size: 22px;
    font-weight: bold;
    width: 100px;
    padding-left: 10px;
  }

  .menu {
    display: flex;
    width: 100%;
    padding-right: 10px;
    justify-content: space-between;
    .menu-items {
      list-style: none;
      display: flex;
      width: 100%;

      .item {
        display: flex;
        justify-content: center;
        align-items: center;
        .menu-link {
          padding: 10px 20px;
          margin-right: 2px;
          border-radius: 4px;
          cursor: pointer;
          text-decoration: none;

          &:hover {
            background-color: #2d3436;
            color: #ffffff;
          }
        }
      }
    }

    .profile {
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      padding: 8px 18px;
      position: relative;

      .actions {
        display: none;
      }

      &:hover {
        background-color: #2d3436;

        .actions {
          display: block;
          width: fit-content;
          background-color: #2d3436;
          position: absolute;
          right: 0;
          margin-top: 44px;
          padding: 0 16px;

          .action {
            display: block;
            color: #ffffff;
            padding: 6px 0;
            text-align: center;

            &:hover {
              color: #74b9ff;
            }
          }
        }
      }

      .avatar {
        width: 36px;
        height: 36px;
        border-radius: 18px;
      }
    }
  }
}
</style>
