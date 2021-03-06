import { component, requires } from './component';

export interface DamageData {
    /**
     * How much damage it does.
     * This should be dice or a flat amount.
     */
    damage: string | number;

    /**
     * Damage type it does. For example "Force".
     */
    type: string;
}

export interface SpellComponentData {
    /**
     * Whether or not the spell requires a verbal component.
     */
    verbal: boolean;

    /**
     * Whether or not the spell requires a somatic component.
     */
    somatic: boolean;

    /**
     * Whether or not the spell requires a material component.
     * If true, then the value is a string containing the necessary component.
     */
    material: false | string;
}

export interface UpcastData {
    /**
     * The written rules for the higher level casting.
     */
    description: string;

    /**
     * Extra count, damage, or other effects for spells at each spell level
     */
    levels?: {
        2?:
            | DamageData
            | string
            | {
                  count: number;
              };
        3?:
            | DamageData
            | string
            | {
                  count: number;
              };
        4?:
            | DamageData
            | string
            | {
                  count: number;
              };
        5?:
            | DamageData
            | string
            | {
                  count: number;
              };
        6?:
            | DamageData
            | string
            | {
                  count: number;
              };
        7?:
            | DamageData
            | string
            | {
                  count: number;
              };
        8?:
            | DamageData
            | string
            | {
                  count: number;
              };
        9?:
            | DamageData
            | string
            | {
                  count: number;
              };
    };

    /**
     * Extra count, damage, or other effects for cantrips at each class level
     */
    cantrips?: {
        5?:
            | DamageData
            | string
            | {
                  count: number;
              };
        11?:
            | DamageData
            | string
            | {
                  count: number;
              };
        17?:
            | DamageData
            | string
            | {
                  count: number;
              };
    };
}

export interface SpellData {
    /**
     * The base level that the spell can be cast at.
     * @type integer
     * @minimum 0
     * @maximum 9
     */
    level: number;

    /**
     * The school of magic that the spell belongs to.
     */
    school: string;

    /**
     * The casting time of the spell.
     */
    castTime: string;

    /**
     * The range of the spell.
     * This should be the number in feet or a string.
     */
    range: number | string;

    /**
     * The area of effect of the spell.
     * example: 30ft cube
     */
    aoe?: string;

    /**
     * The components required to cast the spell.
     */
    components: SpellComponentData;

    /**
     * Whether or not the spell has the ritual tag.
     */
    ritual: boolean;

    /**
     * Whether or not the spell requires concentration.
     */
    concentration: boolean;

    /**
     * The duration of time that the spell lasts.
     */
    duration: string;

    /**
     * The ability of the saving throw required by the spell, if any.
     */
    savingThrow?: 'STR' | 'DEX' | 'CON' | 'INT' | 'WIS' | 'CHA';

    /**
     * Whether or not the spell's attack roll is melee or ranged, if any.
     */
    attack?: 'melee' | 'ranged';

    /**
     * The amount of damage the spell deals, if any.
     * Takes an array of DamageData nodes, useful for spells that deal multiple damage types.
     */
    damage?: Array<DamageData>;

    /**
     * The extra effects of the spell when cast at a higher level, if any.
     */
    upcast?: UpcastData;

    /**
     * The number of attack rolls or spell effects.
     * @default 1
     */
    count: number;

    /**
     * Whether or not the spell should give the user the option to reroll the spell.
     * @default false
     */
    reroll: boolean;
}

@component('spell')
@requires('description')
export class Spell {
    level: number;
    school: string;
    castTime: string;
    range: number | string;
    aoe?: string;
    components: SpellComponentData;
    ritual: boolean;
    concentration: boolean;
    duration: string;
    savingThrow?: 'STR' | 'DEX' | 'CON' | 'INT' | 'WIS' | 'CHA';
    attack?: 'melee' | 'ranged';
    damage?: Array<DamageData>;
    upcast?: UpcastData;
    count: number;
    reroll: boolean;

    constructor(data: SpellData) {
        this.level = data.level;
        this.school = data.school;
        this.castTime = data.castTime;
        this.range = data.range;
        this.aoe = data.aoe;
        this.components = data.components;
        this.ritual = data.ritual;
        this.concentration = data.concentration;
        this.duration = data.duration;
        this.damage = data.damage;
        this.savingThrow = data.savingThrow;
        this.attack = data.attack;
        this.damage = data.damage;
        this.upcast = data.upcast;
        this.count = data.count;
        this.reroll = data.reroll;
    }
}
