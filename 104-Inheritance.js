/**
 * @description
 *  Link Prototype
 *  Link Constructor
 */

const Charoctor = function (name, wapon) {
    this.name = name;
    this.wapon = wapon;
};

const ElfyProto = function () {
    Charoctor.call(this, 'Tom', 'Sheet');
    this.type = 'Nobody';
};

ElfyProto.prototype = Object.create(Charoctor.prototype); // Link prototype
ElfyProto.prototype.constructor = ElfyProto; // Link constructor
const Elfy = new ElfyProto();
console.log(Elfy.__proto__);
console.log(ElfyProto.prototype.constructor);
