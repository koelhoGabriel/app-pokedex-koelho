export interface SimpleAttribute {
    name: string
    url: string
}
  
  interface Sprites {
    back_default: string
    back_female: string
    back_shiny: string
    back_shiny_female: string
    front_default: string
    front_female: string
    front_shiny: string
    front_shiny_female: string
  }
  
  interface Stat {
    base_stat: number
    effort: number
    stat: SimpleAttribute
  }
  
  export interface Type {
    slot: number
    type: SimpleAttribute
  }
  
  export interface Pokemon {
    id: number
    name: string
    sprites: Sprites
    stats: Stat[]
    types: Type[]
  }
  