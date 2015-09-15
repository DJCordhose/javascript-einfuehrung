"use strict";

describe("Person", function () {
    var person;

    beforeEach(function () {
        person = new Person('Olli');
    });

    it("properly creates instances of it", function () {
        expect(person instanceof Person).toBeTruthy();
    });

    it("has the right name", function () {
        expect(person.name).toEqual('Olli');
    });

});