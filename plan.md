# Priority queue

* MVP - Minimum Viable Product
  * open source - LLM that runs very fast
    * WizardLM 7B Uncensored
      * with Serge - big delay before it outputs the result
      * with llama.cpp ~1 second delay
  * open source - translation library or program - LLMs can fulfill this task and even correct mistakes
  * real time: text -> text

* Enhance
  * open source - Speech To Text library
  * real time: audio -> text
  * open source - Text To Speech library
  * real time: audio -> audio
  * real time: text -> audio

Universal Translator

* Architecture - MVP - Desktop to Desktop
  * Every installation can act as a server to which other instances can connect to converse via code
  * Technologies
    * Server - [Deno](https://deno.com/)
    * Web view [Tauri](https://tauri.app/)
    * GUI Framework [fresh](https://github.com/denoland/fresh)
  * Testing
    * LangA -> LangB -> LangA + LLM rating estimation of same meaning
* Pitch
  * Feasability Study
* [Feasability Study](https://github.com/freeman42x/blog/blob/master/Articles/Project%20Feasibility%20Study%20Method/Project%20Feasibility%20Study%20Method.md)
  * Similar projects
    * [RTranslator](https://github.com/niedev/RTranslator)
    * [Instant Voice Translate](https://play.google.com/store/apps/details?id=com.erudite.translator&hl=en&gl=US)