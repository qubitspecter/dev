#!/usr/bin/env bash
# Rewrites old class names to the names used in site.css.
#
# Usage (from the project root, on a clean git tree so you can review the diff):
#   bash rename-classes.sh                       # every .astro/.html/.md/.mdx/.js/.ts/.jsx/.tsx under src/
#   bash rename-classes.sh src/pages/index.astro # or just the files you name
#
# Delete the <style> blocks first. This only edits class tokens, and it will
# not touch dynamic names such as `pg-hero--${variant}`; see the grep at the end.
#
# Matching is whole-token and single-pass: cs-hero does not match cs-hero__title,
# and a replacement is never re-matched by a later rule.

set -euo pipefail

if [ "$#" -gt 0 ]; then
  files=("$@")
else
  mapfile -t files < <(find src -type f \( -name '*.astro' -o -name '*.html' -o -name '*.md' -o -name '*.mdx' \
    -o -name '*.js' -o -name '*.ts' -o -name '*.jsx' -o -name '*.tsx' \))
fi

[ "${#files[@]}" -gt 0 ] || { echo "no files found"; exit 1; }

perl -0777 -i -pe '
my %m = (
  # Case study detail page
  "cs-wrap"            => "dh-wrap",
  "cs-narrow"          => "dh-stack",
  "cs-hero"            => "dh-hero dh-hero--compact",
  "cs-back"            => "dh-hero__back",
  "cs-hero__title"     => "dh-hero__title",
  "cs-hero__label"     => "dh-eyebrow",
  "cs-hero__lede"      => "dh-hero__lede",
  "cs-band"            => "dh-section dh-section--compact dh-section--paper",
  "cs-body"            => "dh-section dh-section--compact",
  "cs-stats"           => "dh-grid dh-grid--fit",
  "cs-stat"            => "dh-point",
  "cs-stat__figure"    => "dh-figure",
  "cs-stat__from"      => "dh-figure__from",
  "cs-stat__label"     => "dh-point__label",
  "cs-stat__note"      => "dh-point__text",
  "cs-h2"              => "dh-h2 dh-h2--sm",
  "cs-p"               => "dh-body dh-body--flow",
  "cs-list"            => "dh-list",
  "cs-glance"          => "dh-glance",
  "cs-glance__row"     => "dh-glance__row",
  "cs-findings"        => "dh-findings",
  "cs-table__head"     => "dh-rows__head",
  "cs-table__row"      => "dh-rows__row",
  "cs-cell__label"     => "dh-rows__label",
  "cs-cell--lead"      => "dh-rows__lead",
  "cs-outcomes"        => "dh-grid dh-grid--fit dh-grid--spaced",
  "cs-outcome"         => "dh-point",
  "cs-outcome__title"  => "dh-h3",
  "cs-disclaimer"      => "dh-disclaimer",

  # Case study index
  "cs-cards"           => "dh-grid dh-grid--2",
  "cs-card"            => "dh-cardlink",
  "cs-card__sector"    => "dh-cardlink__sector",
  "cs-card__figure"    => "dh-figure",
  "cs-card__caption"   => "dh-cardlink__caption",
  "cs-card__title"     => "dh-h3",
  "cs-card__teaser"    => "dh-cardlink__teaser",
  "cs-card__link"      => "dh-cardlink__more",

  # Content pages (Liabilities, Solution, About)
  "pg-wrap"            => "dh-wrap",
  "pg-hero"            => "dh-hero dh-hero--compact",
  "pg-hero--home"      => "dh-hero--home",
  "pg-hero--solution"  => "dh-hero--solution",
  "pg-hero--casestudies" => "dh-hero--casestudies",
  "pg-hero--why"       => "dh-hero--why",
  "pg-hero--about"     => "dh-hero--about",
  "pg-hero__label"     => "dh-eyebrow",
  "pg-hero__title"     => "dh-hero__title",
  "pg-hero__lede"      => "dh-hero__lede",
  "pg-hero__split"     => "dh-split dh-split--hero",
  "pg-band"            => "dh-section dh-section--compact",
  "pg-band--paper"     => "dh-section--paper",
  "pg-band--white"     => "dh-section--white",
  "ab-aside"           => "dh-section--tight",
  "ab-principles"      => "dh-grid dh-grid--4",
  "ab-principle"       => "dh-point",
  "ab-principle__icon" => "dh-point__icon",
  "ab-principle__text" => "dh-point__text",

  # Home page
  "dh-hero__inner"     => "dh-wrap dh-split dh-split--hero",
  "dh-hero__actions"   => "dh-actions",
  "dh-hero__actions--centre" => "dh-actions--centre",
  "dh-trust"           => "dh-grid dh-grid--4 dh-grid--compact",
  "dh-pillars"         => "dh-grid dh-grid--4 dh-grid--spaced",
  "dh-pillar"          => "dh-point",
  "dh-pillar__icon"    => "dh-point__icon",
  "dh-pillar__name"    => "dh-h3",
  "dh-steps"           => "dh-grid dh-grid--3 dh-grid--spaced",
  "--dh-step-count"    => "--cols",
  "dh-industry"        => "dh-card",
  "dh-industry__icon"  => "dh-card__icon",
  "dh-facts"           => "dh-section dh-section--compact dh-section--paper",
  "dh-facts__inner"    => "dh-wrap dh-grid dh-grid--fit",
  "dh-fact"            => "dh-point",
  "dh-fact__figure"    => "dh-figure",
  "dh-fact__text"      => "dh-point__text",
  "dh-cards"           => "dh-grid dh-grid--3 dh-grid--compact dh-grid--spaced",
  "dh-card__title"     => "dh-h3",
  "dh-sr"              => "visually-hidden",

  # CTA, navigation, utilities
  "cta__inner"         => "dh-cta__inner",
  "cta__button"        => "dh-btn dh-btn--primary",
  "nav-cta"            => "dh-btn dh-btn--nav",
  "nav-cta-item"       => "navbar-cta",
  "hero-logo"          => "dh-logo",
  "square-bullet"      => "dh-bullet",
  "paper-grain-overlay" => "dh-grain",

  # VeriState widgets
  "vs-sr"              => "visually-hidden",
  "vs-wrap"            => "dh-wrap",
  "matrix-card"        => "vs-matrix-card",
  "hero-graphic-box"   => "vs-graphic",
  "hero-icon-wrapper"  => "vs-graphic__icon",
  "status-pass"        => "vs-pass",
  "status-fail"        => "vs-fail",
  "status-badge-overlay" => "vs-pill vs-pill--overlay",
  "modal-status-badge" => "vs-pill",
  "bullet-list-group"  => "vs-checklist",
  "bullet-icon"        => "vs-checklist__icon",
  "glass-panel"        => "vs-glass",
  "control-link"       => "vs-control",
  "control-modal"      => "vs-modal",
);
my $alt = join "|", map { quotemeta } sort { length($b) <=> length($a) } keys %m;
s/(?<![\w-])($alt)(?![\w-])/$m{$1}/g;
' "${files[@]}"

echo "Done. Review with: git diff --stat"
echo
echo "Still to do by hand (see the notes):"
echo "  - dynamic class names:  grep -rnE 'pg-hero--|cs-|pg-band--|status-' src | grep -E '\\$\\{|\\+'"
echo "  - the bare 'cs' wrapper class, .dh-panel / .dh-tile* markup, .dh-step* items"
echo "  - add dh-ico to .vs-icon svgs, dh-ico--lg to pillar/principle/industry icons"
echo "  - wrap the old .cta__button in <div class=\"dh-actions\">"
