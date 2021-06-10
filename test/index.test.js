describe("Index", () => {
    it("should work", () => {
        expect({ name: "john" }).toMatchInlineSnapshot(`
Object {
  "name": "john",
}
`);
    });
});
