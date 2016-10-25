# Quantum CSS

Property abbreviations were inspired by [Emmet](http://docs.emmet.io/cheat-sheet/)

Run `npm run package` to create `css/index.css`.

Run `npm run watch` to watch SCSS files and create `css/index.css` on change detection.

## Utilities

### Grid

Template `.g>.gr>.gc`

###### Example

```html
<div class="g">
  <div class="gr">
    <div class="gc12 MD_gc6">
      Occupies 12 cols on small screen, 6 cols starting from MD breakpoint
    </div>
  </div>
  <div class="gr">
    <div class="gc6">
      <!-- Nested grid rows -->
      <div class="gr">
        <div class="gc6"></div>
        <div class="gc6"></div>
      </div>
    </div>
  </div>
</div>
```

###### Classes

- `.g` Grid wrapper.
- `.gr` Grid row.
- `.gc1`, `.gc2`, `.SM_gc1`, etc. Grid columns.
- `.go1`, `.go2`, `.SM_go1`, etc. Grid column offset.
- `.gsl1`, `.gsl2`, `.SM_gsl1`, etc. Grid shift column left.
- `.gsr1`, `.gsr2`, `.SM_gsr1`, etc. Grid shift column right.
- `.p-g` Padding equal to grid gutter at current breakpoint. 
- `.pt-g`, `.pr-g`, `.pb-g`, `.pl-g` Same as `.p-g` but for top, right, bottom and left side only.


### Buttons

Template `button.btn.btnz-m.btnr-m.btnc-bb`

###### Example

```html
<button class="btn btnz-m btnr-m btnc-or"
        type="button">
  Outlined Red
</button>
```

###### Classes
- `.btn` Button common styles.
- `.btnz-s`, `.btnz-m` Button sizes: small, medium.
- `.btnr-s`, `.btnr-m` Button radiuses: small, medium.
- `.btnc-or` Button color: Outlined red.
- `.btnc-g` Button color: Green.
