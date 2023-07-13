<template>
  <div class="bg-white container-fluid">
    <Header></Header>
    <div>
      <div class="relative z-40 lg:hidden" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-black bg-opacity-25"></div>

        <div class="fixed inset-0 z-40 flex">
          <div
            class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl"
          >
            <div class="flex items-center justify-between px-4">
              <h2 class="text-lg font-medium text-gray-900">Filters</h2>
              <button
                type="button"
                class="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
              >
                <span class="sr-only">Close menu</span>
                <svg
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <!-- Filters -->
            <form class="mt-4 border-t border-gray-200">
              <h3 class="sr-only">Categories</h3>
              <ul role="list" class="px-2 py-3 font-medium text-gray-900">
                <li>
                  <a href="#" class="block px-2 py-3">Totes</a>
                </li>
                <li>
                  <a href="#" class="block px-2 py-3">Backpacks</a>
                </li>
                <li>
                  <a href="#" class="block px-2 py-3">Travel Bags</a>
                </li>
                <li>
                  <a href="#" class="block px-2 py-3">Hip Bags</a>
                </li>
                <li>
                  <a href="#" class="block px-2 py-3">Laptop Sleeves</a>
                </li>
              </ul>

              <div class="border-t border-gray-200 px-4 py-6">
                <h3 class="-mx-2 -my-3 flow-root">
                  <!-- Expand/collapse section button -->
                  <button
                    type="button"
                    class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                    aria-controls="filter-section-mobile-0"
                    aria-expanded="false"
                  >
                    <span class="font-medium text-gray-900">Color</span>
                    <span class="ml-6 flex items-center">
                      <!-- Expand icon, show/hide based on section open state. -->
                      <svg
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"
                        />
                      </svg>
                      <!-- Collapse icon, show/hide based on section open state. -->
                      <svg
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                  </button>
                </h3>
                <!-- Filter section, show/hide based on section state. -->
                <div class="pt-6" id="filter-section-mobile-0">
                  <div class="space-y-6">
                    <div class="flex items-center">
                      <input
                        id="filter-mobile-color-0"
                        name="color[]"
                        value="white"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        for="filter-mobile-color-0"
                        class="ml-3 min-w-0 flex-1 text-gray-500"
                        >White</label
                      >
                    </div>
                    <div class="flex items-center">
                      <input
                        id="filter-mobile-color-1"
                        name="color[]"
                        value="beige"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        for="filter-mobile-color-1"
                        class="ml-3 min-w-0 flex-1 text-gray-500"
                        >Beige</label
                      >
                    </div>
                    <div class="flex items-center">
                      <input
                        id="filter-mobile-color-2"
                        name="color[]"
                        value="blue"
                        type="checkbox"
                        checked
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        for="filter-mobile-color-2"
                        class="ml-3 min-w-0 flex-1 text-gray-500"
                        >Blue</label
                      >
                    </div>
                    <div class="flex items-center">
                      <input
                        id="filter-mobile-color-3"
                        name="color[]"
                        value="brown"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        for="filter-mobile-color-3"
                        class="ml-3 min-w-0 flex-1 text-gray-500"
                        >Brown</label
                      >
                    </div>
                    <div class="flex items-center">
                      <input
                        id="filter-mobile-color-4"
                        name="color[]"
                        value="green"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        for="filter-mobile-color-4"
                        class="ml-3 min-w-0 flex-1 text-gray-500"
                        >Green</label
                      >
                    </div>
                    <div class="flex items-center">
                      <input
                        id="filter-mobile-color-5"
                        name="color[]"
                        value="purple"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        for="filter-mobile-color-5"
                        class="ml-3 min-w-0 flex-1 text-gray-500"
                        >Purple</label
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="border-t border-gray-200 px-4 py-6">
                <h3 class="-mx-2 -my-3 flow-root">
                  <!-- Expand/collapse section button -->
                  <button
                    type="button"
                    class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                    aria-controls="filter-section-mobile-1"
                    aria-expanded="false"
                  >
                    <span class="font-medium text-gray-900">Category</span>
                    <span class="ml-6 flex items-center">
                      <!-- Expand icon, show/hide based on section open state. -->
                      <svg
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"
                        />
                      </svg>
                      <!-- Collapse icon, show/hide based on section open state. -->
                      <svg
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                  </button>
                </h3>
                <!-- Filter section, show/hide based on section state. -->
                <div class="pt-6" id="filter-section-mobile-1">
                  <div class="space-y-6">
                    <div class="flex items-center">
                      <input
                        id="filter-mobile-category-0"
                        name="category[]"
                        value="new-arrivals"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        for="filter-mobile-category-0"
                        class="ml-3 min-w-0 flex-1 text-gray-500"
                        >New Arrivals</label
                      >
                    </div>
                    <div class="flex items-center">
                      <input
                        id="filter-mobile-category-1"
                        name="category[]"
                        value="sale"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        for="filter-mobile-category-1"
                        class="ml-3 min-w-0 flex-1 text-gray-500"
                        >Sale</label
                      >
                    </div>
                    <div class="flex items-center">
                      <input
                        id="filter-mobile-category-2"
                        name="category[]"
                        value="travel"
                        type="checkbox"
                        checked
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        for="filter-mobile-category-2"
                        class="ml-3 min-w-0 flex-1 text-gray-500"
                        >Travel</label
                      >
                    </div>
                    <div class="flex items-center">
                      <input
                        id="filter-mobile-category-3"
                        name="category[]"
                        value="organization"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        for="filter-mobile-category-3"
                        class="ml-3 min-w-0 flex-1 text-gray-500"
                        >Organization</label
                      >
                    </div>
                    <div class="flex items-center">
                      <input
                        id="filter-mobile-category-4"
                        name="category[]"
                        value="accessories"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        for="filter-mobile-category-4"
                        class="ml-3 min-w-0 flex-1 text-gray-500"
                        >Accessories</label
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="border-t border-gray-200 px-4 py-6">
                <h3 class="-mx-2 -my-3 flow-root">
                  <!-- Expand/collapse section button -->
                  <button
                    type="button"
                    class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                    aria-controls="filter-section-mobile-2"
                    aria-expanded="false"
                  >
                    <span class="font-medium text-gray-900">Size</span>
                    <span class="ml-6 flex items-center">
                      <!-- Expand icon, show/hide based on section open state. -->
                      <svg
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"
                        />
                      </svg>
                      <!-- Collapse icon, show/hide based on section open state. -->
                      <svg
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                  </button>
                </h3>
                <!-- Filter section, show/hide based on section state. -->
                <div class="pt-6" id="filter-section-mobile-2">
                  <div class="space-y-6">
                    <div class="flex items-center">
                      <input
                        id="filter-mobile-size-0"
                        name="size[]"
                        value="2l"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        for="filter-mobile-size-0"
                        class="ml-3 min-w-0 flex-1 text-gray-500"
                        >2L</label
                      >
                    </div>
                    <div class="flex items-center">
                      <input
                        id="filter-mobile-size-1"
                        name="size[]"
                        value="6l"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        for="filter-mobile-size-1"
                        class="ml-3 min-w-0 flex-1 text-gray-500"
                        >6L</label
                      >
                    </div>
                    <div class="flex items-center">
                      <input
                        id="filter-mobile-size-2"
                        name="size[]"
                        value="12l"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        for="filter-mobile-size-2"
                        class="ml-3 min-w-0 flex-1 text-gray-500"
                        >12L</label
                      >
                    </div>
                    <div class="flex items-center">
                      <input
                        id="filter-mobile-size-3"
                        name="size[]"
                        value="18l"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        for="filter-mobile-size-3"
                        class="ml-3 min-w-0 flex-1 text-gray-500"
                        >18L</label
                      >
                    </div>
                    <div class="flex items-center">
                      <input
                        id="filter-mobile-size-4"
                        name="size[]"
                        value="20l"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        for="filter-mobile-size-4"
                        class="ml-3 min-w-0 flex-1 text-gray-500"
                        >20L</label
                      >
                    </div>
                    <div class="flex items-center">
                      <input
                        id="filter-mobile-size-5"
                        name="size[]"
                        value="40l"
                        type="checkbox"
                        checked
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        for="filter-mobile-size-5"
                        class="ml-3 min-w-0 flex-1 text-gray-500"
                        >40L</label
                      >
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          class="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24"
        >
          <h1 class="text-2xl font-bold tracking-tight text-gray-900 flex items-center">
            <a-icon type="filter" />  Filters
          </h1>

          <div class="flex items-center">
            <!-- <div class="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                  id="menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  Sort
                  <svg
                    class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div
                class="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
              >
                <div class="py-1 hidden" role="none">
                  <a
                    href="#"
                    class="font-medium text-gray-900 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                    >Most Popular</a
                  >
                  <a
                    href="#"
                    class="text-gray-500 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-1"
                    >Best Rating</a
                  >
                  <a
                    href="#"
                    class="text-gray-500 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-2"
                    >Newest</a
                  >
                  <a
                    href="#"
                    class="text-gray-500 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-3"
                    >Price: Low to High</a
                  >
                  <a
                    href="#"
                    class="text-gray-500 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-4"
                    >Price: High to Low</a
                  >
                </div>
              </div>
            </div> -->

            <!-- <button
              type="button"
              class="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
            >
              <span class="sr-only">View grid</span>
              <svg
                class="h-5 w-5"
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </button> -->                                                                          cccccccccccccccccccccccccccccccccccccccccccccccccccc
            <button
              type="button"
              class="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
            >
              <span class="sr-only">Filters</span>
              <svg
                class="h-5 w-5"
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        <section aria-labelledby="products-heading" class="pb-24 pt-6">
          <h2 id="products-heading" class="sr-only">Products</h2>

          <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            <!-- <a-collapse default-active-key="1" :bordered="false">
      <a-collapse-panel key="1" header="This is panel header 1">
        <p>{{ title }}</p>
      </a-collapse-panel>
      <a-collapse-panel key="2" header="This is panel header 2" :disabled="false">
        <p>{{ title }}</p>
      </a-collapse-panel>
      <a-collapse-panel key="3" header="This is panel header 3">
        <p>{{ title }}</p>
      </a-collapse-panel>
    </a-collapse> -->

            <!-- Filters -->
            <form class="hidden lg:block">
              <div
                class="border-b border-gray-200 py-6"
                v-for="(active, menu) in menus"
                :key="menu"
              >
                <h3 class="-my-3 flow-root">
                  <!-- Expand/collapse section button -->
                  <button
                    type="button"
                    class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                    aria-controls="filter-section-0"
                    aria-expanded="false"
                  >
                    <span class="text-lg font-medium text-gray-900">
                      {{ menu }}</span
                    >
                    <span class="ml-6 flex items-center">
                      <!-- Expand icon, show/hide based on section open state. -->
                      <svg
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        @click="setMenu(menu, active)"
                      >
                        <path
                          d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"
                        />
                      </svg>
                      <!-- Collapse icon, show/hide based on section open state. -->
                      <svg
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                  </button>
                </h3>
                <!-- Filter section, show/hide based on section state. -->
                <transition-group
                  name="dropdown"
                  tag="section"
                  class="dropdown"
                  :style="dropdown"
                >
                  <menu
                    v-for="(options, filter) in filters"
                    class="filters"
                    v-show="menus[filter]"
                    ref="menu"
                    :key="filter"
                  >
                    <li
                      v-if="filter === 'experience'"
                      class="filters__experience"
                    >
                      <output>
                        <label>Minimum experience:&nbsp;</label>
                        {{ parseFloat(filters.experience) }}
                      </output>

                      <input
                        v-model="filters.experience"
                        class="filters__range"
                        type="range"
                        :min="experience.min"
                        :max="experience.max"
                        step="1"
                      />
                    </li>

                    <template v-else>
                      <li
                        v-for="(active, option) in options"
                        :key="option"
                        class="filters__item"
                        :class="{ 'filters__item--active': active }"
                        @click="setFilter(filter, option)"
                      >
                        {{ option }}
                      </li>
                    </template>
                  </menu>
                </transition-group>
              </div>
              <div class="text-red-500 font-medium" @click="clearAllFilters">
            Clear all
              </div>

            </form>

            <!-- Product grid -->
            <div class="lg:col-span-3">
              <transition-group name="company" tag="ul" class="content__list">
        <!-- <a-list
          item-layout="vertical"
          size="large"
          :pagination="pagination"
          :data-source="list"
          style="overflow: hidden !important"
        >
          <a-list-item slot="renderItem" key="item.title" slot-scope="item">
            <card-info :advocate="item"></card-info> </a-list-item
        ></a-list> -->
        <li v-for="advocate in list" :key="advocate.id">
          <card-info :advocate="advocate"></card-info>
        </li>
      </transition-group>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
import Header from "../components/home/Header.vue";
import Filters from "../components/Widgets/Filters.vue";
import { mapState } from "vuex";
import Footer from "../components/home/Footer.vue";
import CardInfo from "../components/Cards/CardInfo.vue";
// inject svg spritesheet
fetch("https://s3-us-west-2.amazonaws.com/s.cdpn.io/450744/mock-logos.svg")
  .then((response) => response.text())
  .then((sprite) => {
    let figure = document.createElement("figure");
    figure.style.display = "none";
    figure.innerHTML = sprite;
    document.body.insertBefore(figure, document.body.children[0]);
  });
export default {
  components: {
    Header,
    Filters,
    Footer,
    CardInfo,
    icon: { template: '<svg><use :xlink:href="use"/></svg>' },
  },
  props: ["use"],
  data() {
    return {
      title: "Find A Lawyer",
      description:
        "Our mission is to aid access to justice across Africa by linking verified legal professionals in the justice sector to the market",
      url: "https://dialalawyer.africa",
      image: "https://dialalawyer.africa/images/banner.jpg",
      modal: false,
      dropdown: { height: 0 },
      experience: { min: 10, max: 0 },
      filters: {
        counties: {},
        practiseAreas: {},
        experience: 0,
        otherPractiseAreas: {}, // new
        otherPractiseLocations: {},
      },
      menus: {
        counties: false,
        practiseAreas: false,
        experience: false,
        otherPractiseAreas: false,
        otherPractiseLocations: false,
      },
    };
  },
  computed: {
    ...mapState([
      "user",
      "advocates",
      "allAdvocates",
      "practiseAreas",
      "loading",
      "firebaseEror",
      "counties",
    ]),
    activeMenu() {
      return Object.keys(this.menus).reduce(
        ($$, set, i) => (this.menus[set] ? i : $$),
        -1
      );
    },
    list() {
      let {
        counties,
        practiseAreas,
        otherPractiseAreas,
        otherPractiseLocations,
      } = this.activeFilters;

      return this.advocates.filter(
        ({
          location,
          other_counties,
          specialisation,
          practise_areas,
          experience,
        }) => {
          if (experience < this.filters.experience) return false;
          if (counties.length && !~counties.indexOf(location)) return false;
          if (practiseAreas.length && !~practiseAreas.indexOf(specialisation))
            return false;
          if (
            otherPractiseAreas.length &&
            !practise_areas.some(
              (specialisation) => ~otherPractiseAreas.indexOf(specialisation)
            )
          )
            return false;
          if (
            otherPractiseLocations.length &&
            !other_counties.some(
              (location) => ~otherPractiseLocations.indexOf(location)
            )
          )
            return false;

          return true;
        }
      );
    },
    activeFilters() {
      let {
        counties,
        practiseAreas,
        otherPractiseAreas,
        otherPractiseLocations,
      } = this.filters;

      return {
        counties: Object.keys(counties).filter((c) => counties[c]),
        practiseAreas: Object.keys(practiseAreas).filter(
          (c) => practiseAreas[c]
        ),
        otherPractiseAreas: Object.keys(otherPractiseAreas).filter(
          (c) => otherPractiseAreas[c]
        ),
        otherPractiseLocations: Object.keys(otherPractiseLocations).filter(
          (c) => otherPractiseLocations[c]
        ),
        experience:
          this.filters.experience > this.experience.min
            ? [this.filters.experience]
            : [],
      };
    },
  },
  methods: {
    setFilter(filter, option) {
      if (filter === "counties") {
        this.filters[filter][option] = !this.filters[filter][option];
      } else {
        setTimeout(() => {
          this.clearFilter(filter, option, this.filters[filter][option]);
        }, 100);
      }
    },
    clearFilter(filter, except, active) {
      if (filter === "experience") {
        this.filters[filter] = this.experience.min;
      } else {
        Object.keys(this.filters[filter]).forEach((option) => {
          this.filters[filter][option] = except === option && !active;
        });
      }
    },
    clearAllFilters() {
      Object.keys(this.filters).forEach(this.clearFilter);
    },
    setMenu(menu, active) {
      Object.keys(this.menus).forEach((tab) => {
        this.menus[tab] = !active && tab === menu;
      });
    },
  },
  beforeMount() {
    this.$store.dispatch("fetchActiveAdvocates");
    this.counties.forEach((county) => {
      this.$set(this.filters.counties, county, false);
    });
    this.practiseAreas.forEach((area) => {
      this.$set(this.filters.practiseAreas, area, false);
    });
    this.practiseAreas.forEach((area) => {
      this.$set(this.filters.otherPractiseAreas, area, false);
    });
    this.counties.forEach((location) => {
      this.$set(this.filters.otherPractiseLocations, location, false);
    });
    this.allAdvocates.forEach(({ experience }) => {
      if (this.experience.max < experience) this.experience.max = experience;
      if (this.experience.min > experience) {
        this.experience.min = experience;
        this.filters.experience = experience;
      }
    });
  },

  metaInfo() {
    return {
      title: this.title,
      meta: [
        {
          name: "description",
          content:
            "Our mission is to aid access to justice across Africa by linking verified legal professionals in the justice sector to the market",
        },
        // Open Graph (for Facebook, LinkedIn, etc.)
        { property: "og:title", content: this.title },
        { property: "og:description", content: this.description },
        { property: "og:image", content: this.image },
        { property: "og:url", content: this.url },

        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: this.title },
        { name: "twitter:description", content: this.description },
        { name: "twitter:image", content: this.image },
        { name: "twitter:url", content: this.url },
        // Add more tags as needed
      ],
    };
  },

  watch: {
    activeMenu(index, from) {
      if (index === from) return;

      this.$nextTick(() => {
        if (!this.$refs.menu || !this.$refs.menu[index]) {
          this.dropdown.height = 0;
        } else {
          this.dropdown.height = `${
            this.$refs.menu[index].clientHeight + 16
          }px`;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  position: relative;
  font-family: "Nunito", sans-serif;
  font-weight: 300;
  color: #3d5358;
  max-width: 780px;
  margin: 0 auto;

  &__list {
    position: relative;
    margin-top: 1rem;
    padding-right: 1rem;
    padding-bottom: 5rem;
    backface-visibility: hidden;
  }
}

.company {
  position: relative;
  width: calc(100% / 2 - 1rem);
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 1rem;
  margin-top: 1rem;
  padding-top: 0.75rem;
  border-radius: 6px;
  background-color: white;
  box-shadow: 0 0 0 1px #c5d0d1;
  backface-visibility: hidden;
  transform-origin: 10% 50%;
  z-index: 1;

  @media (min-width: 800px) {
    width: calc(100%);
  }

  &-move {
    transition: all 600ms ease-in-out 50ms;
  }
  &-enter-active {
    transition: all 300ms ease-out;
  }

  &-leave-active {
    transition: all 200ms ease-in;
    position: absolute;
    z-index: 0;
  }

  &-enter,
  &-leave-to {
    opacity: 0;
  }
  &-enter {
    transform: scale(0.9);
  }

  &__data {
    line-height: 1.3;
  }
  &__label {
    font-size: 0.8rem;
  }
  &__rating {
    text-align: center;
  }

  &__info {
    padding: 0 0.75rem;
    text-align: center;
  }

  &__logo {
    width: 3rem;
    height: 3rem;
    margin: 0 auto;
  }

  &__name {
    height: 2.5rem;
    margin: 0.75rem 0;
    font-size: 1.3rem;
    font-weight: 200;
    text-align: center;
  }

  &__slogan {
    height: 2rem;
    text-align: center;
    font-weight: 400;
    text-transform: capitalize;
  }

  &__details {
    display: flex;
    justify-content: space-between;
    margin-top: 1.5rem;
    padding: 0.5rem 0.75rem;
    background-color: rgba(#000000, 0.1);
    border-top: 1px solid #000000;
  }

  &__country:hover {
    text-decoration: underline;
    cursor: pointer;
  }
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  margin: 0 1rem;
  padding: 2rem 0.5rem 1rem;
  border-bottom: 1px solid #000000;

  &__controls {
    display: flex;
  }

  &__icon {
    width: 1rem;
    height: 1rem;
    fill: currentColor;
  }

  &__label {
    position: relative;
    margin-left: 1rem;
    text-transform: capitalize;
    z-index: 1;
    cursor: pointer;

    &::after {
      content: "\00d7";
      display: inline-block;
      color: transparent;
      width: 0.5rem;
      font-weight: 400;
      transform: scale(0);
      transition: transform 150ms ease-in-out;
    }

    &--clear {
      color: #f68185;
      opacity: 0;
      transform: translate3d(-25%, 0, 0);
      pointer-events: none;
      transition: all 275ms ease-in-out;
    }

    &--filter ~ &--clear {
      opacity: 1;
      transform: translate3d(0, 0, 0);
      pointer-events: auto;
    }

    &--filter::after,
    &--active::after {
      transform: scale(1);
    }

    &--filter::after {
      content: "\2022";
      color: #000000;
    }

    &--active::after {
      content: "\00d7";
      color: #f68185;
    }
  }
}

.dropdown {
  position: relative;
  height: 0;
  overflow: hidden;
  transition: height 350ms;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1rem;
    background-image: linear-gradient(to top, white, rgba(white, 0));
  }

  &-enter,
  &-leave-to {
    opacity: 0;
  }

  &-leave,
  &-enter-to {
    opacity: 1;
  }

  &-enter-active,
  &-leave-active {
    position: absolute;
    width: 100%;
    transition: opacity 200ms ease-in-out;
  }

  &-enter-active {
    transition-delay: 100ms;
  }
}

.filters {
  padding: 0 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;

  &__item {
    margin-top: 0.5rem;
    margin-right: 0.5rem;
    padding: 0.25rem 0.5rem;
    border: 1px solid #c5d0d1;
    border-radius: 6px;
    font-size: 0.8rem;
    line-height: 1.35;
    cursor: pointer;
    transition: all 275ms;

    &:hover {
      border-color: #000000;
    }

    &--active {
      color: white;
      border-color: #000000;
      background-color: #000000;
    }
  }

  &__rating {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem 0;
  }

  &__range {
    width: 200px;
    margin-top: 1rem;
    color: inherit;

    &::-webkit-slider-thumb {
      width: 0.8rem;
      height: 0.8rem;
      margin-top: calc(-0.4rem + 2px);
      border-radius: 100%;
      background-color: currentColor;
    }

    &::-webkit-slider-runnable-track {
      width: 100%;
      height: 4px;
      background-image: linear-gradient(to right, white, #46d2c4);
    }
  }
}

.modal {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(white, 0.6);
  z-index: 1;

  &-enter-active,
  &-leave-active {
    transition: opacity 350ms;
  }

  &-enter,
  &-leave-to {
    opacity: 0;
  }

  &-leave,
  &-enter-to {
    opacity: 1;
  }

  &__content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    max-width: 500px;
    min-height: 250px;
    padding: 1.5rem 1rem;
    background-color: white;
    border: 1px solid #c5d0d1;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 0.5rem 1.75rem -0.25rem rgba(#3d5358, 0.4);
  }

  &__title {
    font-weight: 400;
    font-size: 1.5rem;
  }

  &__link {
    margin-top: 1.5rem;
    position: relative;
    font-size: 1.2rem;
    font-weight: 300;
    z-index: 0;

    &::after {
      content: "";
      width: 100%;
      height: 1px;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: currentColor;
      z-index: -1;
      transition: background-color 225ms ease-out;
    }

    &:hover::after {
      background-color: #46d2c4;
    }
  }

  &__close {
    position: absolute;
    top: 0.25rem;
    right: 1rem;
    font-size: 1.75rem;
    font-weight: 400;
    opacity: 0.5;
    transition: opacity 150ms ease-out;

    &:hover {
      opacity: 1;
    }
  }
}
</style>
