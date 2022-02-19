import { shallowMount } from "@vue/test-utils";
import Footer from "@/components/Footer.vue";

describe("Footer", () => {
  describe("footer image", () => {
    it("renders the footer image", () => {
      const wrapper = shallowMount(Footer);
      expect(wrapper.find(".footer__image img").exists()).toBe(true);
    });

    it("includes alt text", () => {
      const wrapper = shallowMount(Footer);
      expect(wrapper.find(".footer__image img").element.alt).toEqual(
        "Joseph Banass Logo"
      );
    });

    it("includes a title", () => {
      const wrapper = shallowMount(Footer);
      expect(wrapper.find(".footer__image img").element.title).toEqual(
        "Joseph Banass Logo"
      );
    });
  });

  describe("footer content", () => {
    describe("footer copy", () => {
      it("has a text content stating 'Let's get in touch.'", () => {
        const wrapper = shallowMount(Footer);
        expect(
          wrapper.find(".footer__copy").element.textContent.trim()
        ).toEqual("Let's get in touch.");
      });
    });

    describe("footer links", () => {
      it("has a link for facebook", () => {
        const wrapper = shallowMount(Footer);
        expect(wrapper.find(".footer__social #facebook").element.href).toBe(
          "https://www.facebook.com/joe.banass"
        );
      });

      it("has a link for linkedin", () => {
        const wrapper = shallowMount(Footer);
        expect(wrapper.find(".footer__social #linkedin").element.href).toBe(
          "https://www.linkedin.com/in/joe-banass"
        );
      });

      it("has a link for github", () => {
        const wrapper = shallowMount(Footer);
        expect(wrapper.find(".footer__social #github").element.href).toBe(
          "https://www.github.com/jbanass"
        );
      });
    });

    describe("copyright", () => {
      it("includes copyright as expected", () => {
        jest
          .spyOn(global.Date.prototype, "getFullYear")
          .mockImplementationOnce(() => {
            return 2021;
          });
        const wrapper = shallowMount(Footer);

        expect(
          wrapper.find(".footer__copyright").element.textContent.trim()
        ).toBe("© 2021");
      });
    });
  });

  describe("methods", () => {
    describe("#copyrightYear", () => {
      it("returns the copyright year", () => {
        jest
          .spyOn(global.Date.prototype, "getFullYear")
          .mockImplementation(() => {
            return 2021;
          });
        const wrapper = shallowMount(Footer);
        expect(wrapper.vm.copyrightYear()).toBe(2021);
      });
    });

    describe("#social_medias", () => {
      it("returns an object for template use", () => {
        const wrapper = shallowMount(Footer);
        expect(wrapper.vm.socialMedias()).toEqual([
          {
            class: "ion-social-facebook",
            url: "https://www.facebook.com/joe.banass",
            id: "facebook",
          },
          {
            class: "ion-social-linkedin",
            url: "https://www.linkedin.com/in/joe-banass",
            id: "linkedin",
          },
          {
            class: "ion-social-github",
            url: "https://www.github.com/jbanass",
            id: "github",
          },
        ]);
      });
    });
  });
});
