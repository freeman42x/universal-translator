# Universal translator

## Goal

Real-time universal translation between any 2 languages

![Starfleet Universal Translator](assets/images/Starfleet_universal_translator%202C_2150s.png)

Input

* text
* audio

Output

* text
* audio

Examples

User1 speaks into their mic in English and User2 hears in realtime the translation in the language of their choosing

User1 types in English and User2 sees in realtime the translation in the language of their choosing

And other 2 combinations: text -> audio or audio -> text

Can also be text + audio -> text + audio

## Specification

Create the highest level language abstraction library.

It should not just work with current human languages but also allow translating between:

* future or past human languages
* made up of languages like Klingon, Esperanto, etc.
* animal languages
* plant, fungi etc. languages - for any life form
* alien languages
* computer languages

It should also be able to model the inner communication mechanisms of life forms: like brain signals, etc.

It should account for the context of what was discussed before so that when word detection is unclear it can infer what is most likely correct based on it.