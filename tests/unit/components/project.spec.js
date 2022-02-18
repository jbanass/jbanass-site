import { shallowMount } from "@vue/test-utils";
import Project from "@/components/Project.vue";

describe("Project", () => {
  describe("project image", () => {
    it("renders the project image", () => {
      const wrapper = shallowMount(Project);
      expect(wrapper.find(".project__image img").exists()).toBe(true);
    });

    it("includes alt text", () => {
      const wrapper = shallowMount(Project);
      expect(wrapper.find(".project__image img").element.alt).toEqual(
        "A monitor with code displayed"
      );
    });

    it("includes title", () => {
      const wrapper = shallowMount(Project);
      expect(wrapper.find(".project__image img").element.title).toEqual(
        "Joseph Banass Project Logo"
      );
    });
  });

  describe("content", () => {
    describe("header", () => {
      it("has a text content stating 'PROJECTS'", () => {
        const wrapper = shallowMount(Project);
        expect(
          wrapper.find(".project__header").element.textContent.trim()
        ).toEqual("Projects");
      });
    });

    describe("subheader", () => {
      it("has a text content stating 'All talk and no show?'", () => {
        const wrapper = shallowMount(Project);
        expect(
          wrapper.find(".project__subheader").element.textContent.trim()
        ).toEqual("All talk and no show?");
      });
    });

    describe("description", () => {
      it("includes the proper content for the description", () => {
        const wrapper = shallowMount(Project);
        expect(
          wrapper.find(".project__description").element.textContent.trim()
        ).toEqual(
          "Not quite. Check out my GitHub for an assortment of projects and scripts I'm in the middle of!"
        );
      });

      describe("anchor link", () => {
        it("includes an anchor link", () => {
          const wrapper = shallowMount(Project);
          expect(wrapper.find(".project__description a").exists()).toBe(true);
        });

        it("links out to my GitHub", () => {
          const wrapper = shallowMount(Project);
          expect(wrapper.find(".project__description a").element.href).toEqual(
            "https://github.com/jbanass"
          );
        });
      });
    });
  });
});
