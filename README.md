# Quantum CSS

[![npm version](https://badge.fury.io/js/quantum-css.svg)](https://www.npmjs.com/package/quantum-css)

> Everything should be made as simple as possible, but no simpler.
>
> Albert Einstein <sup>[1](http://quoteinvestigator.com/2011/05/13/einstein-simple/)</sup>


## Preface 

Quantum CSS is an atomic CSS library written in SCSS.

You won’t need to write any rules and media queries while using Quantum CSS. Creating highly responsive UIs becomes pleasure while extension pattern provides means of controlled customization. You can create molecules with avaialble atoms using [`@extend`][1].

Here is a sample button component with rounded corners, hover and focus transition animations (which are disabled on small screens to provide better experience on touch devices):

```html
<button class="btn btnz-s btns-bb btn-r SM_btnz-n" type="button">
  <!-- Content -->
</button>
```

```sass
.btn {
  @extend .cur-p; // Pointer cursor
  @extend .bds-s, .bdw1; // Border style solid and border width 1px
  @extend .trp-c, .trd200ms; // Transitions
  
  &-r { @extend .bdr4 } // Rounded corners

  &z {
    &-s { @extend .px15, .h40 } // Horizontal padding and height
  }

  &s {
    &-fb  { @extend .bgc-fb, .c-w, .bdc-tt, .SM_bgc-dfb-hf } // Facebook
    &-tw  { @extend .bgc-tw, .c-w, .bdc-tt, .SM_bgc-dtw-hf } // Twitter
  }
}

.SM_btnz {
  &-n { @extend .SM_px30, .SM_h50 }
}
```

Benefits of using [`@extend`][1] approach:

- Highly standardized styles. You have to use limited amount of building blocks, which forces you to have more order in your design.

- Compilation time errors. Build fails if unknown atoms are used.

- Easy to remember class names. Atoms naming convention was heavily inspired by [Emmet](http://docs.emmet.io/cheat-sheet/), and most of the time abbreviations are first letters of words that property or value names consist of.


## Contents


1. [**Naming Conventions**](#naming-conventions)

  - [Value Aliases](#value-aliases)
  - [Color Values](#color-values)
  - [Unit-less Properties](#unit-less-properties)

1. [**Breakpoints**](#breakpoints)

1. [**Pseudo-classes and Pseudo-elements**](#pseudos)

1. [**Grid System**](#grid-system)

  - [Containers](#grid-containers)
  - [Rows](#grid-rows)
  - [Columns](#grid-columns)
  - [Column Ordering](#column-ordering)

1. [**Atom Index**](#atom-index)

  - [**Name Pattern**](#name-pattern)

  - [**Background**](#background)  
     [`background-color`](#background-color)  
     [`background-attachment`](#background-attachment)  
     [`background-clip`](#background-clip)  
     [`background-image`](#background-image)  
     [`background-origin`](#background-origin)  
     [`background-repeat`](#background-repeat)  
     [`background-size`](#background-size)  
     
     [`background-position`](#background-position)  
     [`background-position-x`](#background-position-x)  
     [`background-position-y`](#background-position-y)  
     
     [`fill`](#fill)  
     
  - [**Border**](#border)  
     [`border-color`](#border-color)  
     [`border-top-color`](#border-color)  
     [`border-right-color`](#border-color)  
     [`border-bottom-color`](#border-color)  
     [`border-left-color`](#border-color)  
     
     [`border-width`](#border-width)  
     [`border-top-width`](#border-width)  
     [`border-right-width`](#border-width)  
     [`border-bottom-width`](#border-width)  
     [`border-left-width`](#border-width)  
     
     [`border-style`](#border-style)  
     [`border-top-style`](#border-style)  
     [`border-right-style`](#border-style)  
     [`border-bottom-style`](#border-style)  
     [`border-left-style`](#border-style)  
     
     [`border-radius`](#border-radius)  
     [`border-top-right-radius`](#border-radius)  
     [`border-top-left-radius`](#border-radius)  
     [`border-bottom-right-radius`](#border-radius)  
     [`border-bottom-left-radius`](#border-radius)  
  
  - [**Images**](#images)  
     [`object-fit`](#object-fit)  

  - [**Transforms**](#transforms)  
     [`transform`](#transform)  

  - [**Flexible Box Layout**](#flexible-box-layout)  
     [`flex-direction`](#flex-direction)  
     [`flex-wrap`](#flex-wrap)  
     [`flex-grow`](#flex-grow)  
     [`flex-shrink`](#flex-shrink)  
     [`flex-basis`](#flex-basis)  
     [`justify-content`](#justify-content)  
     [`align-items`](#align-items)  
     [`align-content`](#align-content)  
     [`align-self`](#align-self)  
     [`order`](#order)  
  
  - [**Positioning**](#positioning)  
     [`float`](#float)  
     [`clear`](#clear)  
     [`position`](#position)  
     [`top`](#top-right-bottom-left)  
     [`right`](#top-right-bottom-left)  
     [`bottom`](#top-right-bottom-left)  
     [`left`](#top-right-bottom-left)  
     [`z-index`](#z-index)  
  
  - [**Fonts**](#fonts)  
     [`font-size`](#font-size)  
     [`line-height`](#line-height)  
     [`font-family`](#font-family)  
     [`font-weight`](#font-weight)  
     [`font-style`](#font-style)  
     [`font-variant`](#font-variant)  
     [`font-size-adjust`](#font-size-adjust)  
     [`font-stretch`](#font-stretch)  
     [`-webkit-font-smoothing`](#-webkit-font-smoothing)  
     [`-moz-osx-font-smoothing`](#-moz-osx-font-smoothing)
  
  - [**Transitions**](#transitions)  
     [`transition-property`](#transition-property)  
     [`transition-duration`](#transition-duration)  
     [`transition-timing-function`](#transition-timing-function)  

  - [**Text**](#text)  
     [`letter-spacing`](#letter-spacing)  
     [`overflow-wrap`](#overflow-wrap)  
     [`text-align`](#text-align)  
     [`text-align-last`](#text-align-last)  
     [`text-indent`](#text-indent)  
     [`text-decoration`](#text-decoration)  
     [`text-transform`](#text-transform)  
     [`white-space`](#white-space)  
     [`word-break`](#word-break)  
     [`word-wrap`](#word-wrap)  
  
  - [**Lists and Counters**](#lists-and-counters)  
     [`list-style`](#list-style)  
     [`list-style-position`](#list-style-position)  
     [`list-style-type`](#list-style-type)  
  
  - [**Colors**](#colors)  
     [`color`](#color)  
     [`opacity`](#opacity)  
  
  - [**Box Model**](#box-model)  
     [`box-sizing`](#box-sizing)  
     [`height`](#height)  
     [`width`](#width)  
     [`margin`](#margin)  
     [`padding`](#padding)  
     [`overflow`](#overflow)  
     [`overflow-x`](#overflow-x)  
     [`overflow-y`](#overflow-y)  
     [`-webkit-overflow-scrolling`](#-webkit-overflow-scrolling)  
     [`visibility`](#visibility)  
  
  - [**Page**](#page)  
     [`page-break-before`](#page-break-before)  
     [`page-break-inside`](#page-break-inside)  
     [`page-break-after`](#page-break-after)  
  
  - [**User Interface**](#user-interface)  
     [`cursor`](#cursor)  
     [`resize`](#resize)  
     [`text-overflow`](#text-overflow)  
     [`user-select`](#user-select)  
     
  - [**Table**](#table)  
     [`border-collapse`](#border-collapse)  
     [`caption-side`](#caption-side)  
     [`empty-cells`](#empty-cells)  
     [`table-layout`](#table-layout)  
     [`vertical-align`](#vertical-align)  
     
  - [**Miscellaneous**](#miscellaneous)  
     [`display`](#display)  
  
3. [**License**](#license)


## Naming Conventions

In Quantum CSS every class name consists of four parts in given order:

- Optional [breakpoint](#breakpoints) name: `SM_`, `MD_`, etc.
- Property abbreviation: <a href="#border-color"><code><b>bd</b>tc</code></a>, <a href="#border-color"><code><b>ws</b></code></a>, etc. 
- Value abbreviation: `-w`, `100p`, `360d`, etc.
- Optional pseudo-class and/or pseudo-element modifier: `-hf`, `-h`, etc. 

You can configure separators between each parts of class name with following variables:

- `$breakpoint-sep = "_"` holds separator between breakpoint name and property abbreviation.

- `$literal-sep = "-"` and `$ordinal-sep = ""` define separators that are inserted between property name and literal value abbreviation or ordinal one respectively.

- `$pseudo-sep = ""` separates pseudo modifier from value abbreviation.

Examles and atom index use default separator values.


### Value Aliases

Aliases for commonly used values:

- `p` → `%`
- `e` → `em`
- `x` → `ex`
- `r` → `rem`
- `d` → `deg`
- `t` → `turn`

These aliases are used instead of full units:

- <a href="#width"><code><b>w</b>100p</code></a> → `width: 100%`
- <a href="#height"><code>SM_<b>mah</b>42</code></a> → `max-height: 42px`


### Color Values

Names for colors are used fo increase readability. By default, [Tango palette](http://tango.freedesktop.org/Tango_Icon_Theme_Guidelines#Color_Palette) is used for every color-related atom. You can specify your own palette overriding variables in [`_variables.scss`](scss/_variables.scss).

Greyscale        | Value
---------------- | ---------
1. White `w`     | `#fff`
2. Grey 15% `g1` | `#eeeeec`
3. Grey 30% `g2` | `#d3d7cf`
4. Grey 45% `g3` | `#babdb6`
5. Grey 60% `g4` | `#888a85`
6. Grey 75% `g5` | `#555753`
7. Grey 90% `g6` | `#2e3436`
8. Black `b`     | `#000`

Color             | Light `l` | Medium    | Dark `d`
----------------- | --------- | --------- | ---------
 9. Yellow    `y` | `#fce94f` | `#edd400` | `#c4a000`
10. Orange    `o` | `#fcaf3e` | `#f57900` | `#ce5c00`
11. Chocolate `c` | `#e9b96e` | `#c17d11` | `#8f5902`
12. Green     `g` | `#8ae234` | `#73d216` | `#4e9a06`
13. Navy      `n` | `#729fcf` | `#3465a4` | `#204a87`
14. Purple    `p` | `#ad7f8a` | `#75507b` | `#5c3566`
15. Red       `r` | `#ef2929` | `#cc0000` | `#a40000`

CSS-literal colors:

- `cc` → [`currentColor`](https://developer.mozilla.org/en/docs/Web/CSS/color_value#currentColor_keyword)  
- `t`  → `transparent`
- `i`  → `inherit`

Atom examples:

- <a href="#background-color"><code>SM_<b>bg</b>c-dg</code></a> → `background-color: #4e9a06` Dark green
- <a href="#border-color"><code><b>bd</b>rc-w</code></a> → `border-right-color: white`
- <a href="#color"><code>LG_<b>c</b>-b</code></a> → `color: black`


### Unit-less Properties

Some CSS properties are defined as unit-less, e.g. no unit suffix will be outputted:

- <a href="#line-height"><code><b>lh</b>1</code></a> → `line-height: 1`
- <a href="#font-weight"><code><b>f</b>w400</code></a> → `font-weight: 400`
- <a href="#opacity"><code><b>op</b>37</code></a> → `opacity: 0.37`

## Breakpoints

One of the most powerful features of Quantum is breakpoint-based media queries.


## <a name="pseudos"></a>Pseudo-classes and Pseudo-elements

You can configure set of pseudo-classes and pseudo-elements for which atoms are generated via `$pseudos`. To emit disjunction of pseudos use comma-separated list.

```scss
$pseudos: (
  hf: (hover, focus)
);

.bgc-w-hf:hover,
.bgc-w-hf:focus {
  background-color: white;
}
```

Space-separated list defines selector conjunction:

```scss
$pseudos: (
  eh: empty hover
);

.bgc-w-eh:empty:hover {
  background-color: white;
}
```

Combine those different list types for precise class targeting:

```scss
$pseudos: (
  ch: (first-child hover, last-child hover)
);

.bgc-w-ch:first-child:hover,
.bgc-w-ch:last-child:hover {
  background-color: white;
}
```


## Grid System


### <a name="grid-containers"></a>Containers <code><b>g</b></code>

As well as in [Bootstrap](http://v4-alpha.getbootstrap.com/layout/overview/#containers) Containers are the most basic layout element and are required when using grid system. Use <code><b>g</b>-f</code> to create a fixed-width centered responsive layout of columns.

While containers _can_ be nested, most layouts do not require a nested container.

```html
<div class="g g-f">
  <!-- Fixed-width grid conteiner -->
</div>
```

Widths of fixed-width container are stored in `$grid-widths`.


### <a name="grid-rows"></a>Rows <code><b>g</b>r</code>

Rows are horizontal groups of columns that ensure your columns are lined up properly.

```html
<div class="g g-f">
  <div class="gr">
    <!-- Place columns here -->
  </div>
</div>
```


### <a name="grid-columns"></a>Columns <code><b>g</b>c</code>

Content should be placed within columns, and only columns may be immediate children of rows.

Column classes indicate the number of columns you’d like to use out of the possible 12 per row. So if you want three equal-width columns, you’d use <code>SM_<b>g</b>c4</code>. You can change number of columns in grid altering [`$grid-col-count`](scss/_variables.scss).

Column widths are set in percentages, so they’re always fluid and sized relative to their parent element.

Columns have horizontal padding to create the gutters between individual columns. Gutters can be configured per every breakpoint via [`$grid-gutters`](scss/_variables.scss).

```html
<div class="g g-f">
  <div class="gr">
    <div class="gc12 SM_gc6">
      <!-- Place content here -->
    </div>
  </div>
</div>
```


### Column Ordering

In addition to column clearing at responsive breakpoints, you may need to reset offsets, pushes, or pulls.

Move columns to the right using <code>[<a href="#breakpoints">breakpoint</a>\_]<b>g</b>o(0…12/1)</code> classes. These classes increase the left margin of a column by specified number of columns. For example, `MD_go4` moved `MD_gc4` over four columns.

Change the order of columns by relatively shifting them to the left with <code>[<a href="#breakpoints">breakpoint</a>\_]<b>g</b>sl(0…12/1)</code> or to the right with <code>[<a href="#breakpoints">breakpoint</a>\_]<b>g</b>sr(0…12/1)</code> classes.

```html
<div class="g g-f">
  <div class="gr">
    <div class="gc12 SM_gc6 SM_go3">
      <!-- Place content here -->
    </div>
  </div>
</div>
```


## Atom Index

Values for each atom are listed in the order they are listed in generated CSS.


### Name Pattern

- `(1…10/2)` Range of possible values from `1` to `10` with step `2`.
- `[breakpoint_]` and `[-pseudo]` Optional [breakpoint](#breakpoints) and [pseudo-element or pseudo-class](#pseudos).
- `{key}` and `{value}` Placeholders for map key and map value.

Example `[breakpoint_]fw(100…900/100)` expands to `fw100`, `fw200` … `SM_fw100`, `SM_fw200` … `LG_fw900`.


### Background


#### [`background-color`](https://developer.mozilla.org/en/docs/Web/CSS/background-color)

<code>[<a href="#breakpoints">breakpoint</a>\_]<b>bg</b>c{key}[-<a href="#pseudos">pseudo</a>]</code> → `background-color: {value}`

Specify mapping in <code><a href="scss/_variables.scss">$background-colors</a>: (key: value)</code>.


#### [`background-attachment`](https://developer.mozilla.org/en/docs/Web/CSS/background-attachment)

1. <code><b>bg</b>a-f</code> → `fixed`
1. <code><b>bg</b>a-s</code> → `scroll`


#### [`background-clip`](https://developer.mozilla.org/en/docs/Web/CSS/background-clip)

1. <code><b>bg</b>cp-bb</code> → `border-box`
1. <code><b>bg</b>cp-pb</code> → `padding-box`
1. <code><b>bg</b>cp-cb</code> → `content-box`
1. <code><b>bg</b>cp-i</code>  → `inherit`


#### [`background-image`](https://developer.mozilla.org/en/docs/Web/CSS/background-image)

1. <code><b>bg</b>i-n</code> → `none`
1. <code><b>bg</b>i-i</code> → `inherit`


#### [`background-origin`](https://developer.mozilla.org/en/docs/Web/CSS/background-origin)

1. <code><b>bg</b>o-bb</code> → `border-box`
1. <code><b>bg</b>o-pb</code> → `padding-box`
1. <code><b>bg</b>o-cb</code> → `content-box`


#### [`background-repeat`](https://developer.mozilla.org/en/docs/Web/CSS/background-repeat)

1. <code><b>bg</b>r-n</code> → `no-repeat`
1. <code><b>bg</b>r-x</code> → `repeat-x`
1. <code><b>bg</b>r-y</code> → `repeat-y`
1. <code><b>bg</b>r-s</code> → `space`
1. <code><b>bg</b>r-r</code> → `round`


#### [`background-size`](https://developer.mozilla.org/en/docs/Web/CSS/background-size)

1. <code><b>bg</b>z-a</code>  → `auto`
1. <code><b>bg</b>z-ct</code> → `contain`
1. <code><b>bg</b>z-cv</code> → `cover`


#### [`background-position`](https://developer.mozilla.org/en/docs/Web/CSS/background-position)

1. <code><b>bg</b>p-tc</code> → `top center`
1. <code><b>bg</b>p-tl</code> → `top left`
1. <code><b>bg</b>p-cr</code> → `center right`
1. <code><b>bg</b>p-cc</code> → `center center`
1. <code><b>bg</b>p-cl</code> → `center left`
1. <code><b>bg</b>p-br</code> → `bottom right`
1. <code><b>bg</b>p-bc</code> → `bottom center`
1. <code><b>bg</b>p-bl</code> → `bottom left`


#### [`background-position-x`](https://developer.mozilla.org/en/docs/Web/CSS/background-position-x)

1. <code><b>bg</b>px-r</code> → `right`
1. <code><b>bg</b>px-c</code> → `center`
1. <code><b>bg</b>px-l</code> → `left`


#### [`background-position-y`](https://developer.mozilla.org/en/docs/Web/CSS/background-position-y)

1. <code><b>bg</b>py-t</code> → `top`
1. <code><b>bg</b>py-c</code> → `center`
1. <code><b>bg</b>py-b</code> → `bottom`


#### [`fill`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill)

<code>[<a href="#breakpoints">breakpoint</a>\_]<b>fi</b>{key}[-<a href="#pseudos">pseudo</a>]</code> → `fill: {value}`

Specify mapping in <code><a href="scss/_variables.scss">$background-colors</a>: (key: value)</code>.


### Border


#### [`border-color`](https://developer.mozilla.org/en/docs/Web/CSS/border-color)

1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>c{key}[-<a href="#pseudos">pseudo</a>]</code>  → `border-color: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>xc{key}[-<a href="#pseudos">pseudo</a>]</code> = <code><b>bd</b>lc{key}</code>, <code><b>bd</b>rc{key}</code>
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>yc{key}[-<a href="#pseudos">pseudo</a>]</code> = <code><b>bd</b>tc{key}</code>, <code><b>bd</b>bc{key}</code>
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>tc{key}[-<a href="#pseudos">pseudo</a>]</code> → `border-top-color: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>bc{key}[-<a href="#pseudos">pseudo</a>]</code> → `border-bottom-color: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>rc{key}[-<a href="#pseudos">pseudo</a>]</code> → `border-right-color: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>lc{key}[-<a href="#pseudos">pseudo</a>]</code> → `border-left-color: {value}`

Specify mapping in <code><a href="scss/_variables.scss">$border-colors</a>: (key: value)</code>.


#### [`border-width`](https://developer.mozilla.org/en/docs/Web/CSS/border-width)

1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>w{key}</code>  → `border-width: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>xw{key}</code> = <code><b>bd</b>lw{key}</code>, <code><b>bd</b>rw{key}</code>
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>yw{key}</code> = <code><b>bd</b>tw{key}</code>, <code><b>bd</b>bw{key}</code>
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>tw{key}</code> → `border-top-width: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>bw{key}</code> → `border-bottom-width: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>rw{key}</code> → `border-right-width: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>lw{key}</code> → `border-left-width: {value}`

Specify mapping in <code><a href="scss/_variables.scss">$border-widths</a>: (key: value)</code>.


#### [`border-style`](https://developer.mozilla.org/en/docs/Web/CSS/border-style)

1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>s{key}</code>  → `border-style: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>xs{key}</code> = <code><b>bd</b>ls{key}</code>, <code><b>bd</b>rs{key}</code>
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>ys{key}</code> = <code><b>bd</b>ts{key}</code>, <code><b>bd</b>bs{key}</code>
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>ts{key}</code> → `border-top-style: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>bs{key}</code> → `border-bottom-style: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>rs{key}</code> → `border-right-style: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>ls{key}</code> → `border-left-style: {value}`

Specify mapping in <code><a href="scss/_variables.scss">$border-styles</a>: (key: value)</code>.

By default, all available border styles are included. Border style atoms are emitted for every breakpoint what can
cause significant increase of outputted CSS file. Be sure to remove unused border styles in order to reduce file size.



#### [`border-radius`](https://developer.mozilla.org/en/docs/Web/CSS/border-radius)

1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>r{key}</code>   → `border-radius: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>tr{key}</code>  = <code><b>bd</b>tlr{key}</code>, <code><b>bd</b>trr{key}</code>
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>rr{key}</code>  = <code><b>bd</b>trr{key}</code>, <code><b>bd</b>brr{key}</code>
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>br{key}</code>  = <code><b>bd</b>blr{key}</code>, <code><b>bd</b>brr{key}</code>
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>lr{key}</code>  = <code><b>bd</b>tlr{key}</code>, <code><b>bd</b>blr{key}</code>
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>trr{key}</code> → `border-top-right-radius: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>tlr{key}</code> → `border-top-left-radius: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>brr{key}</code> → `border-bottom-right-radius: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>bd</b>blr{key}</code> → `border-bottom-left-radius: {value}`

Specify mapping in <code><a href="scss/_variables.scss">$border-radiuses</a>: (key: value)</code>.


### Images


#### [`object-fit`](https://developer.mozilla.org/en/docs/Web/CSS/object-fit)

1. <code><b>of</b>-n</code>  → `none`
1. <code><b>of</b>-f</code>  → `fill`
1. <code><b>of</b>-ct</code> → `contain`
1. <code><b>of</b>-cv</code> → `cover`
1. <code><b>of</b>-sd</code> → `scale-down`
1. <code><b>of</b>-i</code>  → `inherit`


### Transforms


#### [`transform`](https://developer.mozilla.org/en/docs/Web/CSS/transform)

1. <code><b>ts</b>-n</code> → `none`
1. <code><b>ts</b>-i</code> → `inherit`
1. <code><b>ts</b>r(45d…360/45d)</code>    → `transform: rotate(45deg)`…`rotate(360deg)`
1. <code><b>ts</b>r(-45d…-360/-45d)</code> → `transform: rotate(-45deg)`…`rotate(-360deg)`
1. <code><b>ts</b>s(0…200/25)</code>       → `transform: scale(0)`…`scale(2)`


### Flexible Box Layout
These shortcuts are available if [display](#display) atom is included.

1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>fx</b>-r</code>  = <a href="#display"><code><b>d</b>-fx</code></a>, <code><b>fx</b>d-r</code>
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>fx</b>-rr</code> = <a href="#display"><code><b>d</b>-fx</code></a>, <code><b>fx</b>d-rr</code>
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>fx</b>-c</code>  = <a href="#display"><code><b>d</b>-fx</code></a>, <code><b>fx</b>d-c</code>
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>fx</b>-cr</code> = <a href="#display"><code><b>d</b>-fx</code></a>, <code><b>fx</b>d-cr</code>


#### [`flex-direction`](https://developer.mozilla.org/en/docs/Web/CSS/flex-direction)

1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>fx</b>d-r</code>  → `row`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>fx</b>d-rr</code> → `row-reverse`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>fx</b>d-c</code>  → `column`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>fx</b>d-cr</code> → `column-reverse`


#### [`flex-wrap`](https://developer.mozilla.org/en/docs/Web/CSS/flex-wrap)

1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>fx</b>w-n</code>  → `nowrap`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>fx</b>w-w</code>  → `wrap`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>fx</b>w-wr</code> → `wrap-reverse`


#### [`flex-grow`](https://developer.mozilla.org/en/docs/Web/CSS/flex-grow)

<code>[<a href="#breakpoints">breakpoint</a>\_]<b>fx</b>g(0…10/1)</code> → `flex-grow: 0`…`10`


#### [`flex-shrink`](https://developer.mozilla.org/en/docs/Web/CSS/flex-shrink)

<code>[<a href="#breakpoints">breakpoint</a>\_]<b>fx</b>s(0…10/1)</code> → `flex-shrink: 0`…`10`


#### [`flex-basis`](https://developer.mozilla.org/en/docs/Web/CSS/flex-basis)

1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>fx</b>b-a</code>   → `auto`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>fx</b>b-mac</code> → `max-content`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>fx</b>b-mic</code> → `min-content`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>fx</b>b-fc</code>  → `fit-content`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>fx</b>b-c</code>   → `content`


#### [`justify-content`](https://developer.mozilla.org/en/docs/Web/CSS/justify-content)

1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>jc</b>-fs</code> → `flex-start`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>jc</b>-fe</code> → `flex-end`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>jc</b>-c</code>  → `center`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>jc</b>-sb</code> → `space-between`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>jc</b>-sa</code> → `space-around`


#### [`align-items`](https://developer.mozilla.org/en/docs/Web/CSS/align-items)

1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>ai</b>-fs</code> → `flex-start`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>ai</b>-fe</code> → `flex-end`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>ai</b>-c</code>  → `center`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>ai</b>-bs</code> → `baseline`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>ai</b>-s</code>  → `stretch`


#### [`align-content`](https://developer.mozilla.org/en/docs/Web/CSS/align-content)

1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>ac</b>-fs</code> → `flex-start`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>ac</b>-fe</code> → `flex-end`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>ac</b>-c</code>  → `center`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>ac</b>-sb</code> → `space-between`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>ac</b>-sa</code> → `space-around`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>ac</b>-s</code>  → `stretch`


#### [`align-self`](https://developer.mozilla.org/en/docs/Web/CSS/align-self)

1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>as</b>-a</code>  → `auto`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>as</b>-fs</code> → `flex-start`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>as</b>-fe</code> → `flex-end`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>as</b>-c</code>  → `center`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>as</b>-b</code>  → `baseline`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>as</b>-s</code>  → `stretch`


#### [`order`](https://developer.mozilla.org/en/docs/Web/CSS/order)

<code>[<a href="#breakpoints">breakpoint</a>\_]<b>ord</b>(0…10/1)</code> → `order: 0`…`10`


### Positioning


#### [`float`](https://developer.mozilla.org/en/docs/Web/CSS/float)

1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>fl</b>-l</code> → `left`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>fl</b>-r</code> → `right`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>fl</b>-n</code> → `none`


#### [`clear`](https://developer.mozilla.org/en/docs/Web/CSS/clear)

1. <code><b>cl</b>-l</code> → `left`
1. <code><b>cl</b>-r</code> → `right`
1. <code><b>cl</b>-b</code> → `both`
1. <code><b>cl</b>-n</code> → `none`


#### [`position`](https://developer.mozilla.org/en/docs/Web/CSS/position)

1. <code><b>pos</b>-s</code> → `static`
1. <code><b>pos</b>-a</code> → `absolute`
1. <code><b>pos</b>-r</code> → `relative`
1. <code><b>pos</b>-f</code> → `fixed`


#### [`top`](https://developer.mozilla.org/en/docs/Web/CSS/top) [`right`](https://developer.mozilla.org/en/docs/Web/CSS/right) [`bottom`](https://developer.mozilla.org/en/docs/Web/CSS/bottom) [`left`](https://developer.mozilla.org/en/docs/Web/CSS/left)

1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>t</b>{key}</code> → `top: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>r</b>{key}</code> → `right: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>b</b>{key}</code> → `bottom: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>l</b>{key}</code> → `left: {value}`

Specify mapping in <code><a href="scss/_variables.scss">$positions</a>: (key: value)</code>.


#### [`z-index`](https://developer.mozilla.org/en/docs/Web/CSS/z-index)

1. <code><b>z</b>(0…10/1)</code>  → `z-index: 0`…`10`
1. <code><b>z</b>-a</code> → `auto`
1. <code><b>z</b>-i</code> → `inherit`


### Fonts


#### [`font-size`](https://developer.mozilla.org/en/docs/Web/CSS/font-size)

1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>z-xxs</code> → `xx-small`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>z-xs</code>  → `x-small`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>z-s</code>   → `small`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>z-m</code>   → `medium`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>z-l</code>   → `large`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>z-xl</code>  → `x-large`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>z-xxl</code> → `xx-large`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>z-lr</code>  → `larger`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>z-sr</code>  → `smaller`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>z-i</code>   → `inherit`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>z{key}</code> → `font-size: {value}`

Specify mapping in <code><a href="scss/_variables.scss">$font-sizes</a>: (key: value)</code>.


#### [`line-height`](https://developer.mozilla.org/en/docs/Web/CSS/line-height)

1. <code><b>lh</b>-n</code> → `normal`
1. <code><b>lh</b>-i</code> → `inherit`
1. <code><b>lh</b>0</code>  → `0`
1. <code><b>lh</b>1</code>  → `1`
1. <code><b>lh</b>{key}</code> → `line-height: {value}`

Specify mapping in <code><a href="scss/_variables.scss">$line-heights</a>: (key: value)</code>.


#### [`font-family`](https://developer.mozilla.org/en/docs/Web/CSS/font-family)

1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>s-s</code>   → `serif`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>s-ss</code>  → `sans-serif`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>s-m</code>   → `monospace`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>s-c</code>   → `cursive`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>s-f</code>   → `fantasy`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>s-i</code>   → `inherit`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>s{key}</code> → `font-family: {value}`

Specify mapping in <code><a href="scss/_variables.scss">$font-families</a>: (key: value)</code>.


#### [`font-weight`](https://developer.mozilla.org/en/docs/Web/CSS/font-weight)

1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>w(100…900/100)</code>  → `font-weight: 100`…`900`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>w-n</code>  → `normal`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>w-b</code>  → `bold`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>w-br</code> → `bolder`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>w-lr</code> → `lighter`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>w-i</code>  → `inherit`


#### [`font-style`](https://developer.mozilla.org/en/docs/Web/CSS/font-style)

1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>s-n</code>  → `normal`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>s-i</code>  → `italic`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>f</b>s-o</code>  → `oblique`


#### [`font-variant`](https://developer.mozilla.org/en/docs/Web/CSS/font-variant)

1. <code><b>f</b>v-cl</code>  → `common-ligatures`
1. <code><b>f</b>v-apc</code> → `all-petite-caps`
1. <code><b>f</b>v-asc</code> → `all-small-caps`
1. <code><b>f</b>v-sc</code>  → `small-caps`
1. <code><b>f</b>v-c</code>   → `contextual`
1. <code><b>f</b>v-df</code>  → `diagonal-fractions`
1. <code><b>f</b>v-sf</code>  → `stacked-fractions`
1. <code><b>f</b>v-hf</code>  → `historical-forms`
1. <code><b>f</b>v-hl</code>  → `historical-ligatures`
1. <code><b>f</b>v-i</code>   → `inherit`
1. <code><b>f</b>v-n</code>   → `normal`
1. <code><b>f</b>v-tn</code>  → `tabular-nums`
1. <code><b>f</b>v-pn</code>  → `proportional-nums`
1. <code><b>f</b>v-pw</code>  → `proportional-width`


#### [`font-size-adjust`](https://developer.mozilla.org/en/docs/Web/CSS/font-size-adjust)

<code><b>f</b>za-n</code>  → `none`


#### [`font-stretch`](https://developer.mozilla.org/en/docs/Web/CSS/font-stretch)

1. <code><b>f</b>st-n</code>  → `normal`
1. <code><b>f</b>st-uc</code> → `ultra-condensed`
1. <code><b>f</b>st-ec</code> → `extra-condensed`
1. <code><b>f</b>st-c</code>  → `condensed`
1. <code><b>f</b>st-sc</code> → `semi-condensed`
1. <code><b>f</b>st-se</code> → `semi-expanded`
1. <code><b>f</b>st-e</code>  → `expanded`
1. <code><b>f</b>st-ee</code> → `extra-expanded`
1. <code><b>f</b>st-ue</code> → `ultra-expanded`


#### [`-webkit-font-smoothing`](https://developer.mozilla.org/en/docs/Web/CSS/-webkit-font-smoothing)

1. <code><b>wf</b>sm-a</code>  → `antialiased`
1. <code><b>wf</b>sm-sa</code> → `subpixel-antialiased`
1. <code><b>wf</b>sm-n</code>  → `none`


#### [`-moz-osx-font-smoothing`](https://developer.mozilla.org/en/docs/Web/CSS/-moz-osx-font-smoothing)

1. <code><b>mf</b>sm-a</code> → `auto`
1. <code><b>mf</b>sm-g</code> → `grayscale`


### Transitions


#### [`transition-property`](https://developer.mozilla.org/en/docs/Web/CSS/transition-property)

1. <code><b>tr</b>p-n</code> → `none`
1. <code><b>tr</b>p-a</code> → `all`


#### [`transition-duration`](https://developer.mozilla.org/en/docs/Web/CSS/transition-duration)

<code><b>tr</b>d(100ms…1000ms/100ms)</code>  → `transition-duration: 100ms`…`1000ms`


#### [`transition-timing-function`](https://developer.mozilla.org/en/docs/Web/CSS/transition-timing-function)

1. <code><b>tr</b>tf-e</code>   → `ease`
1. <code><b>tr</b>tf-ei</code>  → `ease-in`
1. <code><b>tr</b>tf-eo</code>  → `ease-out`
1. <code><b>tr</b>tf-eio</code> → `ease-in-out`
1. <code><b>tr</b>tf-l</code>   → `linear`
1. <code><b>tr</b>tf-ss</code>  → `step-start`
1. <code><b>tr</b>tf-se</code>  → `step-end`


### Text


#### [`letter-spacing`](https://developer.mozilla.org/en/docs/Web/CSS/letter-spacing)

1. <code><b>ls</b>-n</code>   → `normal`
1. <code><b>ls</b>-i</code>   → `inherit`
1. <code><b>ls</b>{key}</code> → `letter-spacing: {value}`

Specify mapping in <code><a href="scss/_variables.scss">$letter-spacings</a>: (key: value)</code>.


#### [`overflow-wrap`](https://developer.mozilla.org/en/docs/Web/CSS/overflow-wrap)

1. <code><b>ov</b>w-n</code> → `normal`
1. <code><b>ov</b>w-b</code> → `break-word`


#### [`text-align`](https://developer.mozilla.org/en/docs/Web/CSS/text-align)

1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>t</b>a-l</code> → `left`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>t</b>a-c</code> → `center`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>t</b>a-r</code> → `right`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>t</b>a-j</code> → `justify`


#### [`text-align-last`](https://developer.mozilla.org/en/docs/Web/CSS/text-align-last)

1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>t</b>al-l</code> → `left`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>t</b>al-c</code> → `center`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>t</b>al-r</code> → `right`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>t</b>al-j</code> → `justify`


#### [`text-indent`](https://developer.mozilla.org/en/docs/Web/CSS/text-indent)

<code><b>t</b>i{key}</code> → `text-indent: {value}`

Specify mapping in <code><a href="scss/_variables.scss">$text-indents</a>: (key: value)</code>.


#### [`text-decoration`](https://developer.mozilla.org/en/docs/Web/CSS/text-decoration)

1. <code><b>t</b>d-n</code>  → `none`
1. <code><b>t</b>d-u</code>  → `underline`
1. <code><b>t</b>d-o</code>  → `overline`
1. <code><b>t</b>d-lt</code> → `line-through`


#### [`text-transform`](https://developer.mozilla.org/en/docs/Web/CSS/text-transform)

1. <code><b>t</b>t-c</code>  → `capitalize`
1. <code><b>t</b>t-u</code>  → `uppercase`
1. <code><b>t</b>t-l</code>  → `lowercase`
1. <code><b>t</b>t-n</code>  → `none`
1. <code><b>t</b>t-fw</code> → `full-width`


#### [`white-space`](https://developer.mozilla.org/en/docs/Web/CSS/white-space)

1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>ws</b>-n </code> → `normal`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>ws</b>-p </code> → `pre`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>ws</b>-nw</code> → `nowrap`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>ws</b>-pw</code> → `pre-wrap`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>ws</b>-pl</code> → `pre-line`


#### [`word-break`](https://developer.mozilla.org/en/docs/Web/CSS/word-break)

1. <code><b>wo</b>b-n</code>  → `normal`
1. <code><b>wo</b>b-ka</code> → `keep-all`
1. <code><b>wo</b>b-ba</code> → `break-all`


#### [`word-wrap`](https://developer.mozilla.org/en/docs/Web/CSS/word-wrap)

1. <code><b>wo</b>w-n</code>  → `normal`
1. <code><b>wo</b>w-bw</code> → `break-word`


### Lists and Counters


#### [`list-style`](https://developer.mozilla.org/en/docs/Web/CSS/list-style)

1. <code><b>li</b>s-n</code> → `none`
1. <code><b>li</b>s-i</code> → `inherit`


#### [`list-style-position`](https://developer.mozilla.org/en/docs/Web/CSS/list-style-position)

1. <code><b>li</b>sp-in</code> → `inside`
1. <code><b>li</b>sp-o</code>  → `outside`
1. <code><b>li</b>sp-i</code>  → `inherit`


#### [`list-style-type`](https://developer.mozilla.org/en/docs/Web/CSS/list-style-type)

1. <code><b>li</b>st-n</code>    → `none`
1. <code><b>li</b>st-d</code>    → `disc`
1. <code><b>li</b>st-c</code>    → `circle`
1. <code><b>li</b>st-s</code>    → `square`
1. <code><b>li</b>st-dc</code>   → `decimal`
1. <code><b>li</b>st-dclz</code> → `decimal-leading-zero`
1. <code><b>li</b>st-lr</code>   → `lower-roman`
1. <code><b>li</b>st-ur</code>   → `upper-roman`
1. <code><b>li</b>st-i</code>    → `inherit`


### Colors


#### [`color`](https://developer.mozilla.org/en/docs/Web/CSS/color)

<code>[<a href="#breakpoints">breakpoint</a>\_]<b>c</b>{key}[-<a href="#pseudos">pseudo</a>]</code> → `color: {value}`

Specify mapping in <code><a href="scss/_variables.scss">$colors</a>: (key: value)</code>.


#### [`opacity`](https://developer.mozilla.org/en/docs/Web/CSS/opacity)

<code><b>op</b>(0…100/1)</code> → `opacity: 0`…`1`


### Box Model


#### [`box-sizing`](https://developer.mozilla.org/en/docs/Web/CSS/box-sizing)

1. <code><b>bxz</b>-cb</code> → `content-box`
1. <code><b>bxz</b>-bb</code> → `border-box`
1. <code><b>bxz</b>-i</code>  → `inherit`


#### [`height`](https://developer.mozilla.org/en/docs/Web/CSS/height)

1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>h</b>{key}</code>   → `height: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>mah</b>-n</code>   → `max-height: none`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>mah</b>{key}</code> → `max-height: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>mih</b>{key}</code> → `min-height: {value}`

Specify mapping in <code><a href="scss/_variables.scss">$heights</a>: (key: value)</code>.


#### [`width`](https://developer.mozilla.org/en/docs/Web/CSS/width)

1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>w</b>{key}</code>   → `width: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>maw</b>-n</code>   → `max-width: none`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>maw</b>{key}</code> → `max-width: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>miw</b>{key}</code> → `min-width: {value}`

Specify mapping in <code><a href="scss/_variables.scss">$widths</a>: (key: value)</code>.


#### [`margin`](https://developer.mozilla.org/en/docs/Web/CSS/margin)

1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>m</b>{key}</code>  → `margin: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>m</b>x-a</code>   → `margin-left: auto`, `margin-right: auto`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>m</b>x{key}</code> = <code><b>m</b>l{key}</code>, <code><b>m</b>r{key}</code>
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>m</b>y{key}</code> = <code><b>m</b>t{key}</code>, <code><b>m</b>b{key}</code>
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>m</b>t{key}</code> → `margin-top: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>m</b>r{key}</code> → `margin-right: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>m</b>b{key}</code> → `margin-bottom: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>m</b>l{key}</code> → `margin-left: {value}`

Specify mapping in <code><a href="scss/_variables.scss">$margins</a>: (key: value)</code>.


#### [`padding`](https://developer.mozilla.org/en/docs/Web/CSS/padding)

1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>p</b>{key}</code>  → `padding: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>p</b>x{key}</code> = <code><b>p</b>l{key}</code>, <code><b>p</b>r{key}</code>
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>p</b>y{key}</code> = <code><b>p</b>t{key}</code>, <code><b>p</b>b{key}</code>
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>p</b>t{key}</code> → `padding-top: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>p</b>r{key}</code> → `padding-right: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>p</b>b100p</code> → `padding-bottom: 100%`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>p</b>b{key}</code> → `padding-bottom: {value}`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>p</b>l{key}</code> → `padding-left: {value}`

Specify mapping in <code><a href="scss/_variables.scss">$paddings</a>: (key: value)</code>.


#### [`overflow`](https://developer.mozilla.org/en/docs/Web/CSS/overflow)

1. <code><b>ov</b>-v</code> → `visible`
1. <code><b>ov</b>-h</code> → `hidden`
1. <code><b>ov</b>-s</code> → `scroll`
1. <code><b>ov</b>-a</code> → `auto`


#### [`overflow-x`](https://developer.mozilla.org/en/docs/Web/CSS/overflow-x)

1. <code><b>ov</b>x-v</code> → `visible`
1. <code><b>ov</b>x-h</code> → `hidden`
1. <code><b>ov</b>x-s</code> → `scroll`
1. <code><b>ov</b>x-a</code> → `auto`


#### [`overflow-y`](https://developer.mozilla.org/en/docs/Web/CSS/overflow-y)

1. <code><b>ov</b>y-v</code> → `visible`
1. <code><b>ov</b>y-h</code> → `hidden`
1. <code><b>ov</b>y-s</code> → `scroll`
1. <code><b>ov</b>y-a</code> → `auto`


#### [`-webkit-overflow-scrolling`](https://developer.mozilla.org/en/docs/Web/CSS/-webkit-overflow-scrolling)

1. <code><b>wov</b>s-t</code> → `touch`
1. <code><b>wov</b>s-a</code> → `auto`


#### [`visibility`](https://developer.mozilla.org/en/docs/Web/CSS/visibility)

1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>v</b>-v</code> → `visible`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>v</b>-h</code> → `hidden`
1. <code>[<a href="#breakpoints">breakpoint</a>\_]<b>v</b>-c</code> → `collapse`


### Page


#### [`page-break-before`](https://developer.mozilla.org/en/docs/Web/CSS/page-break-before)

1. <code><b>pgb</b>b-a</code>  → `auto`
1. <code><b>pgb</b>b-al</code> → `always`
1. <code><b>pgb</b>b-av</code> → `avoid`
1. <code><b>pgb</b>b-l</code>  → `left`
1. <code><b>pgb</b>b-r</code>  → `right`


#### [`page-break-inside`](https://developer.mozilla.org/en/docs/Web/CSS/page-break-inside)

1. <code><b>pgb</b>i-a</code>  → `auto`
1. <code><b>pgb</b>i-av</code> → `avoid`


#### [`page-break-after`](https://developer.mozilla.org/en/docs/Web/CSS/page-break-after)

1. <code><b>pgb</b>a-a</code>  → `auto`
1. <code><b>pgb</b>a-al</code> → `always`
1. <code><b>pgb</b>a-av</code> → `avoid`
1. <code><b>pgb</b>a-l</code>  → `left`
1. <code><b>pgb</b>a-r</code>  → `right`


### User Interface


#### [`cursor`](https://developer.mozilla.org/en/docs/Web/CSS/cursor)

1. <code><b>cur</b>-a</code>     → `auto`
1. <code><b>cur</b>-d</code>     → `default`
1. <code><b>cur</b>-cm</code>    → `context-menu`
1. <code><b>cur</b>-h</code>     → `help`
1. <code><b>cur</b>-p</code>     → `pointer`
1. <code><b>cur</b>-ps</code>    → `progress`
1. <code><b>cur</b>-w</code>     → `wait`
1. <code><b>cur</b>-cl</code>    → `cell`
1. <code><b>cur</b>-c</code>     → `crosshair`
1. <code><b>cur</b>-t</code>     → `text`
1. <code><b>cur</b>-al</code>    → `alias`
1. <code><b>cur</b>-cp</code>    → `copy`
1. <code><b>cur</b>-m</code>     → `move`
1. <code><b>cur</b>-nd</code>    → `no-drop`
1. <code><b>cur</b>-na</code>    → `not-allowed`
1. <code><b>cur</b>-as</code>    → `all-scroll`
1. <code><b>cur</b>-cr</code>    → `col-resize`
1. <code><b>cur</b>-rr</code>    → `row-resize`
1. <code><b>cur</b>-nr</code>    → `n-resize`
1. <code><b>cur</b>-er</code>    → `e-resize`
1. <code><b>cur</b>-sr</code>    → `s-resize`
1. <code><b>cur</b>-wr</code>    → `w-resize`
1. <code><b>cur</b>-ner</code>   → `ne-resize`
1. <code><b>cur</b>-nwr</code>   → `nw-resize`
1. <code><b>cur</b>-ser</code>   → `se-resize`
1. <code><b>cur</b>-swr</code>   → `sw-resize`
1. <code><b>cur</b>-ewr</code>   → `ew-resize`
1. <code><b>cur</b>-nsr</code>   → `ns-resize`
1. <code><b>cur</b>-neswr</code> → `nesw-resize`
1. <code><b>cur</b>-nwser</code> → `nwse-resize`
1. <code><b>cur</b>-zi</code>    → `zoom-in`
1. <code><b>cur</b>-zo</code>    → `zoom-out`
1. <code><b>cur</b>-g</code>     → `grab`
1. <code><b>cur</b>-gr</code>    → `grabbing`
1. <code><b>cur</b>-n</code>     → `none`


#### [`resize`](https://developer.mozilla.org/en/docs/Web/CSS/resize)

1. <code><b>rz</b>-n</code> → `none`
1. <code><b>rz</b>-b</code> → `both`
1. <code><b>rz</b>-h</code> → `horizontal`
1. <code><b>rz</b>-v</code> → `vertical`


#### [`text-overflow`](https://developer.mozilla.org/en/docs/Web/CSS/text-overflow)

1. <code><b>t</b>ov-e</code> → `ellipsis`
1. <code><b>t</b>ov-c</code> → `clip`


#### [`user-select`](https://developer.mozilla.org/en/docs/Web/CSS/user-select)

1. <code><b>us</b>-n</code> → `none`
1. <code><b>us</b>-t</code> → `text`
1. <code><b>us</b>-a</code> → `all`


### Table


#### [`border-collapse`](https://developer.mozilla.org/en/docs/Web/CSS/border-collapse)

1. <code><b>bd</b>ce-c</code> → `collapse`
1. <code><b>bd</b>ce-s</code> → `separate`
1. <code><b>bd</b>ce-i</code> → `inherit`


#### [`caption-side`](https://developer.mozilla.org/en/docs/Web/CSS/caption-side)

1. <code><b>cps</b>-t</code> → `top`
1. <code><b>cps</b>-b</code> → `bottom`


#### [`empty-cells`](https://developer.mozilla.org/en/docs/Web/CSS/empty-cells)

1. <code><b>ec</b>-s</code> → `show`
1. <code><b>ec</b>-h</code> → `hide`


#### [`table-layout`](https://developer.mozilla.org/en/docs/Web/CSS/table-layout)

1. <code><b>tbl</b>-a</code> → `auto`
1. <code><b>tbl</b>-f</code> → `fixed`


#### [`vertical-align`](https://developer.mozilla.org/en/docs/Web/CSS/vertical-align)

1. <code><b>va</b>-sp</code> → `super`
1. <code><b>va</b>-t</code>  → `top`
1. <code><b>va</b>-tt</code> → `text-top`
1. <code><b>va</b>-m</code>  → `middle`
1. <code><b>va</b>-bs</code> → `baseline`
1. <code><b>va</b>-b</code>  → `bottom`
1. <code><b>va</b>-tb</code> → `text-bottom`
1. <code><b>va</b>-sb</code> → `sub`


### Miscellaneous


#### [`display`](https://developer.mozilla.org/en/docs/Web/CSS/display)

1. <code><b>d</b>-n</code>    → `none`
1. <code><b>d</b>-b</code>    → `block`
1. <code><b>d</b>-fx</code>   → `flex`
1. <code><b>d</b>-li</code>   → `list-item`
1. <code><b>d</b>-ri</code>   → `run-in`
1. <code><b>d</b>-i</code>    → `inline`
1. <code><b>d</b>-itb</code>  → `inline-table`
1. <code><b>d</b>-ifx</code>  → `inline-flex`
1. <code><b>d</b>-ib</code>   → `inline-block`
1. <code><b>d</b>-tb</code>   → `table`
1. <code><b>d</b>-tcp</code>  → `table-caption`
1. <code><b>d</b>-tc</code>   → `table-column`
1. <code><b>d</b>-tcg</code>  → `table-column-group`
1. <code><b>d</b>-thg</code>  → `table-header-group`
1. <code><b>d</b>-tfg</code>  → `table-footer-group`
1. <code><b>d</b>-tr</code>   → `table-row`
1. <code><b>d</b>-trg</code>  → `table-row-group`
1. <code><b>d</b>-tcl</code>  → `table-cell`
1. <code><b>d</b>-rb</code>   → `ruby`
1. <code><b>d</b>-rbb</code>  → `ruby-base`
1. <code><b>d</b>-rbbc</code> → `ruby-base-container`
1. <code><b>d</b>-rbt</code>  → `ruby-text`
1. <code><b>d</b>-rbtc</code> → `ruby-text-container`


## License

The code is available under [MIT licence](LICENSE).

[1]: http://sass-lang.com/documentation/file.SASS_REFERENCE.html#extend
