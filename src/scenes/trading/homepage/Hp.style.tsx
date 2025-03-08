import styled from "styled-components"
 export const StyledHp = styled.section`
    
	#header_cover{
 width: 100%;
 height:100%;
 background-color: #141313a5;
 position:absolute;
 z-index: 1;

	}

	.header_container{
        width: 100%;
		position: relative;
		height: 100%;
		z-index:2;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}







html, body, div, span, applet, object,
iframe, h1, h2, h3, h4, h5, h6, p, blockquote,
pre, a, abbr, acronym, address, big, cite,
code, del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var, b,
u, i, center, dl, dt, dd, ol, ul, li, fieldset,
form, label, legend, table, caption, tbody,
tfoot, thead, tr, th, td, article, aside,
canvas, details, embed, figure, figcaption,
footer, header, hgroup, menu, nav, output, ruby,
section, summary, time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;}

article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;}

	.li_75{
      line-height: 2;
	  font-size: 20px;
	  color: #ffffff;
	  font-weight: 500;
	  list-style: none;
	  /* text-decoration: ; */
	}

body {
	line-height: 1;
}

ol, ul {
	list-style: none;
}

blockquote, q {
	quotes: none;
}

	blockquote:before, blockquote:after, q:before, q:after {
		content: '';
		content: none;
	}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

body {
	-webkit-text-size-adjust: none;
}

mark {
	background-color: transparent;
	color: inherit;
}

input::-moz-focus-inner {
	border: 0;
	padding: 0;
}

input, select, textarea {
	-moz-appearance: none;
	-webkit-appearance: none;
	-ms-appearance: none;
	appearance: none;
}

/* Basic */

	html {
		box-sizing: border-box;
	}

	*, *:before, *:after {
		box-sizing: inherit;
	}

	html, body {
		height: 100%;
	}

	body {
		background: #ffffff;
	}

		body.is-preload *, body.is-preload *:before, body.is-preload *:after {
			-moz-animation: none !important;
			-webkit-animation: none !important;
			-ms-animation: none !important;
			animation: none !important;
			-moz-transition: none !important;
			-webkit-transition: none !important;
			-ms-transition: none !important;
			transition: none !important;
		}

	body, input, select, textarea {
		color: #6e6e6e;
		font-family: 'Source Sans Pro', sans-serif;
		font-size: 16pt;
		font-weight: 400;
		line-height: 1.75em;
	}

	a {
		-moz-transition: color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;
		-webkit-transition: color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;
		-ms-transition: color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;
		transition: color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;
		border-bottom: dotted 1px;
		color: #f4f4;
		text-decoration: none;
	}

		a:hover {
			border-bottom-color: transparent;
		}

	strong, b {
		font-weight: 600;
		color: #5b5b5b;
	}

	em, i {
		font-style: italic;
	}

	p, ul, ol, dl, table, blockquote, form {
		margin: 0 0 2em 0;
	}

	h1, h2, h3, h4, h5, h6 {
		color: #22C55E;
		font-weight: 700;
		letter-spacing: 0.125em;
		line-height: 1.75em;
		margin-bottom: 1em;
		text-transform: uppercase;
		text-align: center;
	}

		h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
			color: inherit;
			text-decoration: none;
		}

	h2 {
		font-size: 1.75em;
	}

	h3 {
		font-size: 1.5em;
	}

	sub {
		font-size: 0.8em;
		position: relative;
		top: 0.5em;
	}

	sup {
		font-size: 0.8em;
		position: relative;
		top: -0.5em;
	}

	hr {
		border: 0;
		border-top: solid 1px rgba(224, 224, 224, 0.75);
		margin-bottom: 1.5em;
	}

	blockquote {
		border-left: solid 0.5em rgba(224, 224, 224, 0.75);
		font-style: italic;
		padding: 1em 0 1em 2em;
	}

/* Container */

	.container {
		margin: 0 auto;
		max-width: 100%;
		width: 51em;
	}

		.container.medium {
			width: 38.25em;
		}

		@media screen and (max-width: 1280px) {

			.container {
				width: 48em;
			}

				.container.medium {
					width: 36em;
				}

		}

		@media screen and (max-width: 980px) {

			.container {
				width: 95%;
			}

				.container.medium {
					width: 71.25%;
				}

		}

		@media screen and (max-width: 840px) {

			.container {
				width: 95% !important;
			}

		}

		@media screen and (max-width: 736px) {

			.container {
				width: 90% !important;
			}

		}

		@media screen and (max-width: 480px) {

			.container {
				width: 100% !important;
			}

		}

/* Row */

	.row {
		display: flex;
		flex-wrap: wrap;
		box-sizing: border-box;
		align-items: stretch;
	}

		.row > * {
			box-sizing: border-box;
		}

		.row.gtr-uniform > * > :last-child {
			margin-bottom: 0;
		}

		.row.aln-left {
			justify-content: flex-start;
		}

		.row.aln-center {
			justify-content: center;
		}

		.row.aln-right {
			justify-content: flex-end;
		}

		.row.aln-top {
			align-items: flex-start;
		}

		.row.aln-middle {
			align-items: center;
		}

		.row.aln-bottom {
			align-items: flex-end;
		}

		.row > .imp {
			order: -1;
		}

		.row > .col-1 {
			width: 8.33333%;
		}

		.row > .off-1 {
			margin-left: 8.33333%;
		}

		.row > .col-2 {
			width: 16.66667%;
		}

		.row > .off-2 {
			margin-left: 16.66667%;
		}

		.row > .col-3 {
			width: 25%;
		}

		.row > .off-3 {
			margin-left: 25%;
		}

		.row > .col-4 {
			width: 33.33333%;
		}

		.row > .off-4 {
			margin-left: 33.33333%;
		}

		.row > .col-5 {
			width: 41.66667%;
		}

		.row > .off-5 {
			margin-left: 41.66667%;
		}

		.row > .col-6 {
			width: 50%;
		}

		.row > .off-6 {
			margin-left: 50%;
		}

		.row > .col-7 {
			width: 58.33333%;
		}

		.row > .off-7 {
			margin-left: 58.33333%;
		}

		.row > .col-8 {
			width: 66.66667%;
		}

		.row > .off-8 {
			margin-left: 66.66667%;
		}

		.row > .col-9 {
			width: 75%;
		}

		.row > .off-9 {
			margin-left: 75%;
		}

		.row > .col-10 {
			width: 83.33333%;
		}

		.row > .off-10 {
			margin-left: 83.33333%;
		}

		.row > .col-11 {
			width: 91.66667%;
		}

		.row > .off-11 {
			margin-left: 91.66667%;
		}

		.row > .col-12 {
			width: 100%;
		}

		.row > .off-12 {
			margin-left: 100%;
		}

		.row.gtr-0 {
			margin-top: 0px;
			margin-left: 0px;
		}

			.row.gtr-0 > * {
				padding: 0px 0 0 0px;
			}

			.row.gtr-0.gtr-uniform {
				margin-top: 0px;
			}

				.row.gtr-0.gtr-uniform > * {
					padding-top: 0px;
				}

		.row.gtr-25 {
			margin-top: -7.5px;
			margin-left: -7.5px;
		}

			.row.gtr-25 > * {
				padding: 7.5px 0 0 7.5px;
			}

			.row.gtr-25.gtr-uniform {
				margin-top: -7.5px;
			}

				.row.gtr-25.gtr-uniform > * {
					padding-top: 7.5px;
				}

		.row.gtr-50 {
			margin-top: -15px;
			margin-left: -15px;
		}

			.row.gtr-50 > * {
				padding: 15px 0 0 15px;
			}

			.row.gtr-50.gtr-uniform {
				margin-top: -15px;
			}

				.row.gtr-50.gtr-uniform > * {
					padding-top: 15px;
				}

		.row {
			margin-top: -30px;
			margin-left: -30px;
		}

			.row > * {
				padding: 30px 0 0 30px;
			}

			.row.gtr-uniform {
				margin-top: -30px;
			}

				.row.gtr-uniform > * {
					padding-top: 30px;
				}

		.row.gtr-150 {
			margin-top: -45px;
			margin-left: -45px;
		}

			.row.gtr-150 > * {
				padding: 45px 0 0 45px;
			}

			.row.gtr-150.gtr-uniform {
				margin-top: -45px;
			}

				.row.gtr-150.gtr-uniform > * {
					padding-top: 45px;
				}

		.row.gtr-200 {
			margin-top: -60px;
			margin-left: -60px;
		}

			.row.gtr-200 > * {
				padding: 60px 0 0 60px;
			}

			.row.gtr-200.gtr-uniform {
				margin-top: -60px;
			}

				.row.gtr-200.gtr-uniform > * {
					padding-top: 60px;
				}

		@media screen and (max-width: 1680px) {

			.row {
				display: flex;
				flex-wrap: wrap;
				box-sizing: border-box;
				align-items: stretch;
			}

				.row > * {
					box-sizing: border-box;
				}

				.row.gtr-uniform > * > :last-child {
					margin-bottom: 0;
				}

				.row.aln-left {
					justify-content: flex-start;
				}

				.row.aln-center {
					justify-content: center;
				}

				.row.aln-right {
					justify-content: flex-end;
				}

				.row.aln-top {
					align-items: flex-start;
				}

				.row.aln-middle {
					align-items: center;
				}

				.row.aln-bottom {
					align-items: flex-end;
				}

				.row > .imp-wide {
					order: -1;
				}

				.row > .col-1-wide {
					width: 8.33333%;
				}

				.row > .off-1-wide {
					margin-left: 8.33333%;
				}

				.row > .col-2-wide {
					width: 16.66667%;
				}

				.row > .off-2-wide {
					margin-left: 16.66667%;
				}

				.row > .col-3-wide {
					width: 25%;
				}

				.row > .off-3-wide {
					margin-left: 25%;
				}

				.row > .col-4-wide {
					width: 33.33333%;
				}

				.row > .off-4-wide {
					margin-left: 33.33333%;
				}

				.row > .col-5-wide {
					width: 41.66667%;
				}

				.row > .off-5-wide {
					margin-left: 41.66667%;
				}

				.row > .col-6-wide {
					width: 50%;
				}

				.row > .off-6-wide {
					margin-left: 50%;
				}

				.row > .col-7-wide {
					width: 58.33333%;
				}

				.row > .off-7-wide {
					margin-left: 58.33333%;
				}

				.row > .col-8-wide {
					width: 66.66667%;
				}

				.row > .off-8-wide {
					margin-left: 66.66667%;
				}

				.row > .col-9-wide {
					width: 75%;
				}

				.row > .off-9-wide {
					margin-left: 75%;
				}

				.row > .col-10-wide {
					width: 83.33333%;
				}

				.row > .off-10-wide {
					margin-left: 83.33333%;
				}

				.row > .col-11-wide {
					width: 91.66667%;
				}

				.row > .off-11-wide {
					margin-left: 91.66667%;
				}

				.row > .col-12-wide {
					width: 100%;
				}

				.row > .off-12-wide {
					margin-left: 100%;
				}

				.row.gtr-0 {
					margin-top: 0px;
					margin-left: 0px;
				}

					.row.gtr-0 > * {
						padding: 0px 0 0 0px;
					}

					.row.gtr-0.gtr-uniform {
						margin-top: 0px;
					}

						.row.gtr-0.gtr-uniform > * {
							padding-top: 0px;
						}

				.row.gtr-25 {
					margin-top: -7.5px;
					margin-left: -7.5px;
				}

					.row.gtr-25 > * {
						padding: 7.5px 0 0 7.5px;
					}

					.row.gtr-25.gtr-uniform {
						margin-top: -7.5px;
					}

						.row.gtr-25.gtr-uniform > * {
							padding-top: 7.5px;
						}

				.row.gtr-50 {
					margin-top: -15px;
					margin-left: -15px;
				}

					.row.gtr-50 > * {
						padding: 15px 0 0 15px;
					}

					.row.gtr-50.gtr-uniform {
						margin-top: -15px;
					}

						.row.gtr-50.gtr-uniform > * {
							padding-top: 15px;
						}

				.row {
					margin-top: -30px;
					margin-left: -30px;
				}

					.row > * {
						padding: 30px 0 0 30px;
					}

					.row.gtr-uniform {
						margin-top: -30px;
					}

						.row.gtr-uniform > * {
							padding-top: 30px;
						}

				.row.gtr-150 {
					margin-top: -45px;
					margin-left: -45px;
				}

					.row.gtr-150 > * {
						padding: 45px 0 0 45px;
					}

					.row.gtr-150.gtr-uniform {
						margin-top: -45px;
					}

						.row.gtr-150.gtr-uniform > * {
							padding-top: 45px;
						}

				.row.gtr-200 {
					margin-top: -60px;
					margin-left: -60px;
				}

					.row.gtr-200 > * {
						padding: 60px 0 0 60px;
					}

					.row.gtr-200.gtr-uniform {
						margin-top: -60px;
					}

						.row.gtr-200.gtr-uniform > * {
							padding-top: 60px;
						}

		}

		@media screen and (max-width: 1280px) {

			.row {
				display: flex;
				flex-wrap: wrap;
				box-sizing: border-box;
				align-items: stretch;
			}

				.row > * {
					box-sizing: border-box;
				}

				.row.gtr-uniform > * > :last-child {
					margin-bottom: 0;
				}

				.row.aln-left {
					justify-content: flex-start;
				}

				.row.aln-center {
					justify-content: center;
				}

				.row.aln-right {
					justify-content: flex-end;
				}

				.row.aln-top {
					align-items: flex-start;
				}

				.row.aln-middle {
					align-items: center;
				}

				.row.aln-bottom {
					align-items: flex-end;
				}

				.row > .imp-normal {
					order: -1;
				}

				.row > .col-1-normal {
					width: 8.33333%;
				}

				.row > .off-1-normal {
					margin-left: 8.33333%;
				}

				.row > .col-2-normal {
					width: 16.66667%;
				}

				.row > .off-2-normal {
					margin-left: 16.66667%;
				}

				.row > .col-3-normal {
					width: 25%;
				}

				.row > .off-3-normal {
					margin-left: 25%;
				}

				.row > .col-4-normal {
					width: 33.33333%;
				}

				.row > .off-4-normal {
					margin-left: 33.33333%;
				}

				.row > .col-5-normal {
					width: 41.66667%;
				}

				.row > .off-5-normal {
					margin-left: 41.66667%;
				}

				.row > .col-6-normal {
					width: 50%;
				}

				.row > .off-6-normal {
					margin-left: 50%;
				}

				.row > .col-7-normal {
					width: 58.33333%;
				}

				.row > .off-7-normal {
					margin-left: 58.33333%;
				}

				.row > .col-8-normal {
					width: 66.66667%;
				}

				.row > .off-8-normal {
					margin-left: 66.66667%;
				}

				.row > .col-9-normal {
					width: 75%;
				}

				.row > .off-9-normal {
					margin-left: 75%;
				}

				.row > .col-10-normal {
					width: 83.33333%;
				}

				.row > .off-10-normal {
					margin-left: 83.33333%;
				}

				.row > .col-11-normal {
					width: 91.66667%;
				}

				.row > .off-11-normal {
					margin-left: 91.66667%;
				}

				.row > .col-12-normal {
					width: 100%;
				}

				.row > .off-12-normal {
					margin-left: 100%;
				}

				.row.gtr-0 {
					margin-top: 0px;
					margin-left: 0px;
				}

					.row.gtr-0 > * {
						padding: 0px 0 0 0px;
					}

					.row.gtr-0.gtr-uniform {
						margin-top: 0px;
					}

						.row.gtr-0.gtr-uniform > * {
							padding-top: 0px;
						}

				.row.gtr-25 {
					margin-top: -7.5px;
					margin-left: -7.5px;
				}

					.row.gtr-25 > * {
						padding: 7.5px 0 0 7.5px;
					}

					.row.gtr-25.gtr-uniform {
						margin-top: -7.5px;
					}

						.row.gtr-25.gtr-uniform > * {
							padding-top: 7.5px;
						}

				.row.gtr-50 {
					margin-top: -15px;
					margin-left: -15px;
				}

					.row.gtr-50 > * {
						padding: 15px 0 0 15px;
					}

					.row.gtr-50.gtr-uniform {
						margin-top: -15px;
					}

						.row.gtr-50.gtr-uniform > * {
							padding-top: 15px;
						}

				.row {
					margin-top: -30px;
					margin-left: -30px;
				}

					.row > * {
						padding: 30px 0 0 30px;
					}

					.row.gtr-uniform {
						margin-top: -30px;
					}

						.row.gtr-uniform > * {
							padding-top: 30px;
						}

				.row.gtr-150 {
					margin-top: -45px;
					margin-left: -45px;
				}

					.row.gtr-150 > * {
						padding: 45px 0 0 45px;
					}

					.row.gtr-150.gtr-uniform {
						margin-top: -45px;
					}

						.row.gtr-150.gtr-uniform > * {
							padding-top: 45px;
						}

				.row.gtr-200 {
					margin-top: -60px;
					margin-left: -60px;
				}

					.row.gtr-200 > * {
						padding: 60px 0 0 60px;
					}

					.row.gtr-200.gtr-uniform {
						margin-top: -60px;
					}

						.row.gtr-200.gtr-uniform > * {
							padding-top: 60px;
						}

		}

		@media screen and (max-width: 980px) {

			.row {
				display: flex;
				flex-wrap: wrap;
				box-sizing: border-box;
				align-items: stretch;
			}

				.row > * {
					box-sizing: border-box;
				}

				.row.gtr-uniform > * > :last-child {
					margin-bottom: 0;
				}

				.row.aln-left {
					justify-content: flex-start;
				}

				.row.aln-center {
					justify-content: center;
				}

				.row.aln-right {
					justify-content: flex-end;
				}

				.row.aln-top {
					align-items: flex-start;
				}

				.row.aln-middle {
					align-items: center;
				}

				.row.aln-bottom {
					align-items: flex-end;
				}

				.row > .imp-narrow {
					order: -1;
				}

				.row > .col-1-narrow {
					width: 8.33333%;
				}

				.row > .off-1-narrow {
					margin-left: 8.33333%;
				}

				.row > .col-2-narrow {
					width: 16.66667%;
				}

				.row > .off-2-narrow {
					margin-left: 16.66667%;
				}

				.row > .col-3-narrow {
					width: 25%;
				}

				.row > .off-3-narrow {
					margin-left: 25%;
				}

				.row > .col-4-narrow {
					width: 33.33333%;
				}

				.row > .off-4-narrow {
					margin-left: 33.33333%;
				}

				.row > .col-5-narrow {
					width: 41.66667%;
				}

				.row > .off-5-narrow {
					margin-left: 41.66667%;
				}

				.row > .col-6-narrow {
					width: 50%;
				}

				.row > .off-6-narrow {
					margin-left: 50%;
				}

				.row > .col-7-narrow {
					width: 58.33333%;
				}

				.row > .off-7-narrow {
					margin-left: 58.33333%;
				}

				.row > .col-8-narrow {
					width: 66.66667%;
				}

				.row > .off-8-narrow {
					margin-left: 66.66667%;
				}

				.row > .col-9-narrow {
					width: 75%;
				}

				.row > .off-9-narrow {
					margin-left: 75%;
				}

				.row > .col-10-narrow {
					width: 83.33333%;
				}

				.row > .off-10-narrow {
					margin-left: 83.33333%;
				}

				.row > .col-11-narrow {
					width: 91.66667%;
				}

				.row > .off-11-narrow {
					margin-left: 91.66667%;
				}

				.row > .col-12-narrow {
					width: 100%;
				}

				.row > .off-12-narrow {
					margin-left: 100%;
				}

				.row.gtr-0 {
					margin-top: 0px;
					margin-left: 0px;
				}

					.row.gtr-0 > * {
						padding: 0px 0 0 0px;
					}

					.row.gtr-0.gtr-uniform {
						margin-top: 0px;
					}

						.row.gtr-0.gtr-uniform > * {
							padding-top: 0px;
						}

				.row.gtr-25 {
					margin-top: -7.5px;
					margin-left: -7.5px;
				}

					.row.gtr-25 > * {
						padding: 7.5px 0 0 7.5px;
					}

					.row.gtr-25.gtr-uniform {
						margin-top: -7.5px;
					}

						.row.gtr-25.gtr-uniform > * {
							padding-top: 7.5px;
						}

				.row.gtr-50 {
					margin-top: -15px;
					margin-left: -15px;
				}

					.row.gtr-50 > * {
						padding: 15px 0 0 15px;
					}

					.row.gtr-50.gtr-uniform {
						margin-top: -15px;
					}

						.row.gtr-50.gtr-uniform > * {
							padding-top: 15px;
						}

				.row {
					margin-top: -30px;
					margin-left: -30px;
				}

					.row > * {
						padding: 30px 0 0 30px;
					}

					.row.gtr-uniform {
						margin-top: -30px;
					}

						.row.gtr-uniform > * {
							padding-top: 30px;
						}

				.row.gtr-150 {
					margin-top: -45px;
					margin-left: -45px;
				}

					.row.gtr-150 > * {
						padding: 45px 0 0 45px;
					}

					.row.gtr-150.gtr-uniform {
						margin-top: -45px;
					}

						.row.gtr-150.gtr-uniform > * {
							padding-top: 45px;
						}

				.row.gtr-200 {
					margin-top: -60px;
					margin-left: -60px;
				}

					.row.gtr-200 > * {
						padding: 60px 0 0 60px;
					}

					.row.gtr-200.gtr-uniform {
						margin-top: -60px;
					}

						.row.gtr-200.gtr-uniform > * {
							padding-top: 60px;
						}

		}

		@media screen and (max-width: 840px) {

			.row {
				display: flex;
				flex-wrap: wrap;
				box-sizing: border-box;
				align-items: stretch;
			}

				.row > * {
					box-sizing: border-box;
				}

				.row.gtr-uniform > * > :last-child {
					margin-bottom: 0;
				}

				.row.aln-left {
					justify-content: flex-start;
				}

				.row.aln-center {
					justify-content: center;
				}

				.row.aln-right {
					justify-content: flex-end;
				}

				.row.aln-top {
					align-items: flex-start;
				}

				.row.aln-middle {
					align-items: center;
				}

				.row.aln-bottom {
					align-items: flex-end;
				}

				.row > .imp-narrower {
					order: -1;
				}

				.row > .col-1-narrower {
					width: 8.33333%;
				}

				.row > .off-1-narrower {
					margin-left: 8.33333%;
				}

				.row > .col-2-narrower {
					width: 16.66667%;
				}

				.row > .off-2-narrower {
					margin-left: 16.66667%;
				}

				.row > .col-3-narrower {
					width: 25%;
				}

				.row > .off-3-narrower {
					margin-left: 25%;
				}

				.row > .col-4-narrower {
					width: 33.33333%;
				}

				.row > .off-4-narrower {
					margin-left: 33.33333%;
				}

				.row > .col-5-narrower {
					width: 41.66667%;
				}

				.row > .off-5-narrower {
					margin-left: 41.66667%;
				}

				.row > .col-6-narrower {
					width: 50%;
				}

				.row > .off-6-narrower {
					margin-left: 50%;
				}

				.row > .col-7-narrower {
					width: 58.33333%;
				}

				.row > .off-7-narrower {
					margin-left: 58.33333%;
				}

				.row > .col-8-narrower {
					width: 66.66667%;
				}

				.row > .off-8-narrower {
					margin-left: 66.66667%;
				}

				.row > .col-9-narrower {
					width: 75%;
				}

				.row > .off-9-narrower {
					margin-left: 75%;
				}

				.row > .col-10-narrower {
					width: 83.33333%;
				}

				.row > .off-10-narrower {
					margin-left: 83.33333%;
				}

				.row > .col-11-narrower {
					width: 91.66667%;
				}

				.row > .off-11-narrower {
					margin-left: 91.66667%;
				}

				.row > .col-12-narrower {
					width: 100%;
				}

				.row > .off-12-narrower {
					margin-left: 100%;
				}

				.row.gtr-0 {
					margin-top: 0px;
					margin-left: 0px;
				}

					.row.gtr-0 > * {
						padding: 0px 0 0 0px;
					}

					.row.gtr-0.gtr-uniform {
						margin-top: 0px;
					}

						.row.gtr-0.gtr-uniform > * {
							padding-top: 0px;
						}

				.row.gtr-25 {
					margin-top: -5px;
					margin-left: -5px;
				}

					.row.gtr-25 > * {
						padding: 5px 0 0 5px;
					}

					.row.gtr-25.gtr-uniform {
						margin-top: -5px;
					}

						.row.gtr-25.gtr-uniform > * {
							padding-top: 5px;
						}

				.row.gtr-50 {
					margin-top: -10px;
					margin-left: -10px;
				}

					.row.gtr-50 > * {
						padding: 10px 0 0 10px;
					}

					.row.gtr-50.gtr-uniform {
						margin-top: -10px;
					}

						.row.gtr-50.gtr-uniform > * {
							padding-top: 10px;
						}

				.row {
					margin-top: -20px;
					margin-left: -20px;
				}

					.row > * {
						padding: 20px 0 0 20px;
					}

					.row.gtr-uniform {
						margin-top: -20px;
					}

						.row.gtr-uniform > * {
							padding-top: 20px;
						}

				.row.gtr-150 {
					margin-top: -30px;
					margin-left: -30px;
				}

					.row.gtr-150 > * {
						padding: 30px 0 0 30px;
					}

					.row.gtr-150.gtr-uniform {
						margin-top: -30px;
					}

						.row.gtr-150.gtr-uniform > * {
							padding-top: 30px;
						}

				.row.gtr-200 {
					margin-top: -40px;
					margin-left: -40px;
				}

					.row.gtr-200 > * {
						padding: 40px 0 0 40px;
					}

					.row.gtr-200.gtr-uniform {
						margin-top: -40px;
					}

						.row.gtr-200.gtr-uniform > * {
							padding-top: 40px;
						}

		}

		@media screen and (max-width: 736px) {

			.row {
				display: flex;
				flex-wrap: wrap;
				box-sizing: border-box;
				align-items: stretch;
			}

				.row > * {
					box-sizing: border-box;
				}

				.row.gtr-uniform > * > :last-child {
					margin-bottom: 0;
				}

				.row.aln-left {
					justify-content: flex-start;
				}

				.row.aln-center {
					justify-content: center;
				}

				.row.aln-right {
					justify-content: flex-end;
				}

				.row.aln-top {
					align-items: flex-start;
				}

				.row.aln-middle {
					align-items: center;
				}

				.row.aln-bottom {
					align-items: flex-end;
				}

				.row > .imp-mobile {
					order: -1;
				}

				.row > .col-1-mobile {
					width: 8.33333%;
				}

				.row > .off-1-mobile {
					margin-left: 8.33333%;
				}

				.row > .col-2-mobile {
					width: 16.66667%;
				}

				.row > .off-2-mobile {
					margin-left: 16.66667%;
				}

				.row > .col-3-mobile {
					width: 25%;
				}

				.row > .off-3-mobile {
					margin-left: 25%;
				}

				.row > .col-4-mobile {
					width: 33.33333%;
				}

				.row > .off-4-mobile {
					margin-left: 33.33333%;
				}

				.row > .col-5-mobile {
					width: 41.66667%;
				}

				.row > .off-5-mobile {
					margin-left: 41.66667%;
				}

				.row > .col-6-mobile {
					width: 50%;
				}

				.row > .off-6-mobile {
					margin-left: 50%;
				}

				.row > .col-7-mobile {
					width: 58.33333%;
				}

				.row > .off-7-mobile {
					margin-left: 58.33333%;
				}

				.row > .col-8-mobile {
					width: 66.66667%;
				}

				.row > .off-8-mobile {
					margin-left: 66.66667%;
				}

				.row > .col-9-mobile {
					width: 75%;
				}

				.row > .off-9-mobile {
					margin-left: 75%;
				}

				.row > .col-10-mobile {
					width: 83.33333%;
				}

				.row > .off-10-mobile {
					margin-left: 83.33333%;
				}

				.row > .col-11-mobile {
					width: 91.66667%;
				}

				.row > .off-11-mobile {
					margin-left: 91.66667%;
				}

				.row > .col-12-mobile {
					width: 100%;
				}

				.row > .off-12-mobile {
					margin-left: 100%;
				}

				.row.gtr-0 {
					margin-top: 0px;
					margin-left: 0px;
				}

					.row.gtr-0 > * {
						padding: 0px 0 0 0px;
					}

					.row.gtr-0.gtr-uniform {
						margin-top: 0px;
					}

						.row.gtr-0.gtr-uniform > * {
							padding-top: 0px;
						}

				.row.gtr-25 {
					margin-top: -57.5px;
					margin-left: -5px;
				}

					.row.gtr-25 > * {
						padding: 57.5px 0 0 5px;
					}

					.row.gtr-25.gtr-uniform {
						margin-top: -5px;
					}

						.row.gtr-25.gtr-uniform > * {
							padding-top: 5px;
						}

				.row.gtr-50 {
					margin-top: -115px;
					margin-left: -10px;
				}

					.row.gtr-50 > * {
						padding: 115px 0 0 10px;
					}

					.row.gtr-50.gtr-uniform {
						margin-top: -10px;
					}

						.row.gtr-50.gtr-uniform > * {
							padding-top: 10px;
						}

				.row {
					margin-top: -230px;
					margin-left: -20px;
				}

					.row > * {
						padding: 230px 0 0 20px;
					}

					.row.gtr-uniform {
						margin-top: -20px;
					}

						.row.gtr-uniform > * {
							padding-top: 20px;
						}

				.row.gtr-150 {
					margin-top: -345px;
					margin-left: -30px;
				}

					.row.gtr-150 > * {
						padding: 345px 0 0 30px;
					}

					.row.gtr-150.gtr-uniform {
						margin-top: -30px;
					}

						.row.gtr-150.gtr-uniform > * {
							padding-top: 30px;
						}

				.row.gtr-200 {
					margin-top: -460px;
					margin-left: -40px;
				}

					.row.gtr-200 > * {
						padding: 460px 0 0 40px;
					}

					.row.gtr-200.gtr-uniform {
						margin-top: -40px;
					}

						.row.gtr-200.gtr-uniform > * {
							padding-top: 40px;
						}

		}

		@media screen and (max-width: 480px) {

			.row {
				display: flex;
				flex-wrap: wrap;
				box-sizing: border-box;
				align-items: stretch;
			}

				.row > * {
					box-sizing: border-box;
				}

				.row.gtr-uniform > * > :last-child {
					margin-bottom: 0;
				}

				.row.aln-left {
					justify-content: flex-start;
				}

				.row.aln-center {
					justify-content: center;
				}

				.row.aln-right {
					justify-content: flex-end;
				}

				.row.aln-top {
					align-items: flex-start;
				}

				.row.aln-middle {
					align-items: center;
				}

				.row.aln-bottom {
					align-items: flex-end;
				}

				.row > .imp-mobilep {
					order: -1;
				}

				.row > .col-1-mobilep {
					width: 8.33333%;
				}

				.row > .off-1-mobilep {
					margin-left: 8.33333%;
				}

				.row > .col-2-mobilep {
					width: 16.66667%;
				}

				.row > .off-2-mobilep {
					margin-left: 16.66667%;
				}

				.row > .col-3-mobilep {
					width: 25%;
				}

				.row > .off-3-mobilep {
					margin-left: 25%;
				}

				.row > .col-4-mobilep {
					width: 33.33333%;
				}

				.row > .off-4-mobilep {
					margin-left: 33.33333%;
				}

				.row > .col-5-mobilep {
					width: 41.66667%;
				}

				.row > .off-5-mobilep {
					margin-left: 41.66667%;
				}

				.row > .col-6-mobilep {
					width: 50%;
				}

				.row > .off-6-mobilep {
					margin-left: 50%;
				}

				.row > .col-7-mobilep {
					width: 58.33333%;
				}

				.row > .off-7-mobilep {
					margin-left: 58.33333%;
				}

				.row > .col-8-mobilep {
					width: 66.66667%;
				}

				.row > .off-8-mobilep {
					margin-left: 66.66667%;
				}

				.row > .col-9-mobilep {
					width: 75%;
				}

				.row > .off-9-mobilep {
					margin-left: 75%;
				}

				.row > .col-10-mobilep {
					width: 83.33333%;
				}

				.row > .off-10-mobilep {
					margin-left: 83.33333%;
				}

				.row > .col-11-mobilep {
					width: 91.66667%;
				}

				.row > .off-11-mobilep {
					margin-left: 91.66667%;
				}

				.row > .col-12-mobilep {
					width: 100%;
				}

				.row > .off-12-mobilep {
					margin-left: 100%;
				}

				.row.gtr-0 {
					margin-top: 0px;
					margin-left: 0px;
				}

					.row.gtr-0 > * {
						padding: 0px 0 0 0px;
					}

					.row.gtr-0.gtr-uniform {
						margin-top: 0px;
					}

						.row.gtr-0.gtr-uniform > * {
							padding-top: 0px;
						}

				.row.gtr-25 {
					margin-top: -5px;
					margin-left: -5px;
				}

					.row.gtr-25 > * {
						padding: 5px 0 0 5px;
					}

					.row.gtr-25.gtr-uniform {
						margin-top: -5px;
					}

						.row.gtr-25.gtr-uniform > * {
							padding-top: 5px;
						}

				.row.gtr-50 {
					margin-top: -10px;
					margin-left: -10px;
				}

					.row.gtr-50 > * {
						padding: 10px 0 0 10px;
					}

					.row.gtr-50.gtr-uniform {
						margin-top: -10px;
					}

						.row.gtr-50.gtr-uniform > * {
							padding-top: 10px;
						}

				.row {
					margin-top: -20px;
					margin-left: -20px;
				}

					.row > * {
						padding: 20px 0 0 20px;
					}

					.row.gtr-uniform {
						margin-top: -20px;
					}

						.row.gtr-uniform > * {
							padding-top: 20px;
						}

				.row.gtr-150 {
					margin-top: -30px;
					margin-left: -30px;
				}

					.row.gtr-150 > * {
						padding: 30px 0 0 30px;
					}

					.row.gtr-150.gtr-uniform {
						margin-top: -30px;
					}

						.row.gtr-150.gtr-uniform > * {
							padding-top: 30px;
						}

				.row.gtr-200 {
					margin-top: -40px;
					margin-left: -40px;
				}

					.row.gtr-200 > * {
						padding: 40px 0 0 40px;
					}

					.row.gtr-200.gtr-uniform {
						margin-top: -40px;
					}

						.row.gtr-200.gtr-uniform > * {
							padding-top: 40px;
						}

		}

/* Section/Article */

	section.special, article.special {
		text-align: center;
	}

	header {
		text-align: center;
	}

		header p {
			position: relative;
			top: -1em;
			color: #888888;
			text-transform: uppercase;
			letter-spacing: 0.075em;
		}

		header.major {
			border-bottom-width: 1px;
			border-color: rgba(224, 224, 224, 0.75);
			border-style: solid;
			border-top-width: 1px;
			margin-bottom: 6em;
			padding: 4em 0;
			position: relative;
		}

			header.major:before, header.major:after {
				background: rgba(224, 224, 224, 0.75);
				content: '';
				display: block;
				height: 1px;
				left: 0;
				position: absolute;
				width: 100%;
			}

			header.major:before {
				top: 10px;
			}

			header.major:after {
				bottom: 10px;
			}

			header.major h2 {
				margin: 0;
			}

			header.major p {
				top: 0;
				margin: 1.5em 0 0 0;
				padding: 1.5em 1.5em 0 1.5em;
				font-size: 1.5em;
				line-height: 1.75em;
				border-top: solid 1px rgba(224, 224, 224, 0.75);
				display: inline-block;
			}

			header.major.last {
				border-bottom: 0;
				margin-bottom: 0;
				padding-bottom: 0;
			}

				header.major.last:after {
					display: none;
				}

				header.major.last h2 {
					margin-bottom: 1em;
				}

	footer {
		text-align: center;
	}

		footer.major {
			border-bottom-width: 1px;
			border-color: rgba(224, 224, 224, 0.75);
			border-style: solid;
			border-top-width: 1px;
			margin-top: 6em;
			padding: 4em 0;
			position: relative;
		}

			footer.major:before, footer.major:after {
				background: rgba(224, 224, 224, 0.75);
				content: '';
				display: block;
				height: 1px;
				left: 0;
				position: absolute;
				width: 100%;
			}

			footer.major:before {
				top: 10px;
			}

			footer.major:after {
				bottom: 10px;
			}

/* Form */

	label {
		display: block;
		color: #5b5b5b;
		font-size: 0.8em;
		font-weight: 700;
		letter-spacing: 0.125em;
		line-height: 1.75em;
		text-transform: uppercase;
		margin: 0 0 0.5em 0;
	}

	input[type="text"],
	input[type="password"],
	input[type="email"],
	select,
	textarea {
		-moz-appearance: none;
		-webkit-appearance: none;
		-ms-appearance: none;
		appearance: none;
		-moz-transition: background-color 0.2s ease-in-out;
		-webkit-transition: background-color 0.2s ease-in-out;
		-ms-transition: background-color 0.2s ease-in-out;
		transition: background-color 0.2s ease-in-out;
		background: none;
		border-radius: 4px;
		border: 0;
		border: solid 1px rgba(224, 224, 224, 0.75);
		color: inherit;
		display: block;
		outline: 0;
		padding: 0.75em;
		text-decoration: none;
		width: 100%;
		opacity: 1;
	}

		input[type="text"]:focus,
		input[type="password"]:focus,
		input[type="email"]:focus,
		select:focus,
		textarea:focus {
			background: rgba(224, 224, 224, 0.15);
			border-color: #4eb980;
		}

	input[type="text"],
	input[type="password"],
	input[type="email"],
	select {
		line-height: 1em;
	}

	select {
		background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' preserveAspectRatio='none' viewBox='0 0 40 40'%3E%3Cpath d='M9.4,12.3l10.4,10.4l10.4-10.4c0.2-0.2,0.5-0.4,0.9-0.4c0.3,0,0.6,0.1,0.9,0.4l3.3,3.3c0.2,0.2,0.4,0.5,0.4,0.9 c0,0.4-0.1,0.6-0.4,0.9L20.7,31.9c-0.2,0.2-0.5,0.4-0.9,0.4c-0.3,0-0.6-0.1-0.9-0.4L4.3,17.3c-0.2-0.2-0.4-0.5-0.4-0.9 c0-0.4,0.1-0.6,0.4-0.9l3.3-3.3c0.2-0.2,0.5-0.4,0.9-0.4S9.1,12.1,9.4,12.3z' fill='rgba(224, 224, 224, 0.75)' /%3E%3C/svg%3E");
		background-size: 1.25em;
		background-repeat: no-repeat;
		background-position: calc(100% - 1em) center;
		padding-right: 1.5em;
		text-overflow: ellipsis;
	}

		select option {
			color: #5b5b5b;
			background: #ffffff;
		}

		select:focus::-ms-value {
			background-color: transparent;
		}

		select::-ms-expand {
			display: none;
		}

	textarea {
		padding: 0.5em 0.75em;
	}

	::-webkit-input-placeholder {
		color: inherit;
		opacity: 0.5;
		position: relative;
		top: 3px;
	}

	:-moz-placeholder {
		color: inherit;
		opacity: 0.5;
	}

	::-moz-placeholder {
		color: inherit;
		opacity: 0.5;
	}

	:-ms-input-placeholder {
		color: inherit;
		opacity: 0.5;
	}

/* Image */

	.image {
		border: 0;
		display: inline-block;
		position: relative;
	}

		.image:after {
			-moz-transition: opacity 0.25s ease-in-out;
			-webkit-transition: opacity 0.25s ease-in-out;
			-ms-transition: opacity 0.25s ease-in-out;
			transition: opacity 0.25s ease-in-out;
			background-image: url("images/overlay.png");
			content: '';
			display: block;
			height: 100%;
			left: 0;
			opacity: 0.2;
			position: absolute;
			top: 0;
			width: 100%;
		}

		.image img {
			display: block;
		}

		.image.fit {
			display: block;
		}

			.image.fit img {
				display: block;
				width: 100%;
			}

		.image.feature {
			display: block;
			margin: 0 0 2em 0;
		}

			.image.feature img {
				display: block;
				width: 100%;
			}

		.image.icon {
			-moz-perspective: 500px;
			-webkit-perspective: 500px;
			-ms-perspective: 500px;
			perspective: 500px;
		}

			.image.icon:before {
				-moz-transition: -moz-transform 0.1s ease-in-out, font-size 0.1s ease-in-out;
				-webkit-transition: -webkit-transform 0.1s ease-in-out, font-size 0.1s ease-in-out;
				-ms-transition: -ms-transform 0.1s ease-in-out, font-size 0.1s ease-in-out;
				transition: transform 0.1s ease-in-out, font-size 0.1s ease-in-out;
				color: #fff;
				font-size: 6em;
				height: 1em;
				left: 50%;
				line-height: 1em;
				margin: -0.5em 0 0 -0.5em;
				position: absolute;
				text-align: center;
				top: 50%;
				width: 1em;
				z-index: 1;
			}

			.image.icon:hover:before {
				-moz-transform: translateZ(1em);
				-webkit-transform: translateZ(1em);
				-ms-transform: translateZ(1em);
				transform: translateZ(1em);
			}

			.image.icon:hover:after {
				opacity: 1;
			}

	span.image.icon {
		cursor: default;
	}

/* Icon */

	.icon {
		text-decoration: none;
		border-bottom: none;
		position: relative;
	}

		.icon:before {
			-moz-osx-font-smoothing: grayscale;
			-webkit-font-smoothing: antialiased;
			display: inline-block;
			font-style: normal;
			font-variant: normal;
			text-rendering: auto;
			line-height: 1;
			text-transform: none !important;
			font-family: 'Font Awesome 5 Free';
			font-weight: 400;
		}

		.icon > .label {
			display: none;
		}

		.icon:before {
			line-height: inherit;
		}

		.icon.solid:before {
			font-weight: 900;
		}

		.icon.brands:before {
			font-family: 'Font Awesome 5 Brands';
		}

/* List */

	ol.default {
		list-style: decimal;
		padding-left: 1.25em;
	}

		ol.default li {
			padding-left: 0.25em;
		}

	ul.default {
		list-style: disc;
		padding-left: 1em;
	}

		ul.default li {
			padding-left: 0.5em;
		}

/* Actions */

	ul.actions {
		display: -moz-flex;
		display: -webkit-flex;
		display: -ms-flex;
		display: flex;
		cursor: default;
		list-style: none;
		margin-left: -1em;
		padding-left: 0;
	}

		ul.actions li {
			padding: 0 0 0 1em;
			vertical-align: middle;
		}

		ul.actions.special {
			-moz-justify-content: center;
			-webkit-justify-content: center;
			-ms-justify-content: center;
			justify-content: center;
			width: 100%;
			margin-left: 0;
		}

			ul.actions.special li:first-child {
				padding-left: 0;
			}

		ul.actions.stacked {
			-moz-flex-direction: column;
			-webkit-flex-direction: column;
			-ms-flex-direction: column;
			flex-direction: column;
			margin-left: 0;
		}

			ul.actions.stacked li {
				padding: 1.25em 0 0 0;
			}

				ul.actions.stacked li:first-child {
					padding-top: 0;
				}

		ul.actions.fit {
			width: calc(100% + 1em);
		}

			ul.actions.fit li {
				-moz-flex-grow: 1;
				-webkit-flex-grow: 1;
				-ms-flex-grow: 1;
				flex-grow: 1;
				-moz-flex-shrink: 1;
				-webkit-flex-shrink: 1;
				-ms-flex-shrink: 1;
				flex-shrink: 1;
				width: 100%;
			}

				ul.actions.fit li > * {
					width: 100%;
				}

			ul.actions.fit.stacked {
				width: 100%;
			}

		ul.actions:last-child {
			margin-bottom: 0;
		}

		@media screen and (max-width: 736px) {

			ul.actions:not(.fixed) {
				-moz-flex-direction: column;
				-webkit-flex-direction: column;
				-ms-flex-direction: column;
				flex-direction: column;
				margin-left: 0;
				width: 100% !important;
			}

				ul.actions:not(.fixed) li {
					-moz-flex-grow: 1;
					-webkit-flex-grow: 1;
					-ms-flex-grow: 1;
					flex-grow: 1;
					-moz-flex-shrink: 1;
					-webkit-flex-shrink: 1;
					-ms-flex-shrink: 1;
					flex-shrink: 1;
					padding: 1em 0 0 0;
					text-align: center;
					width: 100%;
				}

					ul.actions:not(.fixed) li > * {
						width: 100%;
					}

					ul.actions:not(.fixed) li:first-child {
						padding-top: 0;
					}

					ul.actions:not(.fixed) li input[type="submit"],
					ul.actions:not(.fixed) li input[type="reset"],
					ul.actions:not(.fixed) li input[type="button"],
					ul.actions:not(.fixed) li button,
					ul.actions:not(.fixed) li .button {
						width: 100%;
					}

						ul.actions:not(.fixed) li input[type="submit"].icon:before,
						ul.actions:not(.fixed) li input[type="reset"].icon:before,
						ul.actions:not(.fixed) li input[type="button"].icon:before,
						ul.actions:not(.fixed) li button.icon:before,
						ul.actions:not(.fixed) li .button.icon:before {
							margin-left: -0.5em;
						}

		}

/* Icons */

	ul.icons {
		cursor: default;
	}

		ul.icons li {
			display: inline-block;
			font-size: 1.25em;
			line-height: 1em;
			padding-left: 0.5em;
		}

			ul.icons li:first-child {
				padding-left: 0;
			}

			ul.icons li a, ul.icons li span {
				-moz-transition: background-color 0.2s ease-in-out;
				-webkit-transition: background-color 0.2s ease-in-out;
				-ms-transition: background-color 0.2s ease-in-out;
				transition: background-color 0.2s ease-in-out;
				border-radius: 100%;
				border: solid 1px rgba(224, 224, 224, 0.75);
				display: inline-block;
				height: 2em;
				line-height: 2em;
				text-align: center;
				width: 2em;
			}

				ul.icons li a:hover, ul.icons li span:hover {
					background: rgba(224, 224, 224, 0.15);
				}

/* Table */

	.table-wrapper {
		overflow-x: auto;
		-webkit-overflow-scrolling: touch;
	}

	table {
		width: 100%;
	}

		table.default {
			width: 100%;
		}

			table.default tbody tr {
				border-bottom: solid 1px rgba(224, 224, 224, 0.75);
			}

				table.default tbody tr:nth-child(2n - 1) {
					background: rgba(224, 224, 224, 0.15);
				}

			table.default td {
				padding: 0.5em 1em 0.5em 1em;
			}

			table.default th {
				color: #5b5b5b;
				font-size: 0.8em;
				font-weight: 700;
				letter-spacing: 0.125em;
				line-height: 1.75em;
				padding: 0.5em 1em 0.5em 1em;
				text-align: left;
				text-transform: uppercase;
			}

			table.default thead {
				border-bottom: solid 1px rgba(224, 224, 224, 0.75);
			}

/* Button */

	input[type="submit"],
	input[type="reset"],
	input[type="button"],
	.button {
		-moz-appearance: none;
		-webkit-appearance: none;
		-ms-appearance: none;
		appearance: none;
		-moz-transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
		-webkit-transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
		-ms-transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
		transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
		background: #544d55;
		border-radius: 4px;
		border: 0;
		color: #ffffff;
		cursor: pointer;
		display: inline-block;
		font-size: 0.9em;
		font-weight: 700;
		letter-spacing: 0.125em;
		line-height: 3.25em;
		min-width: 15em;
		padding: 0 1.5em;
		text-align: center;
		text-decoration: none;
		text-transform: uppercase;
	}

		input[type="submit"]:hover,
		input[type="reset"]:hover,
		input[type="button"]:hover,
		.button:hover {
			background: #6e6570;
		}

		input[type="submit"]:active,
		input[type="reset"]:active,
		input[type="button"]:active,
		.button:active {
			background: #474148;
		}

		input[type="submit"].alt,
		input[type="reset"].alt,
		input[type="button"].alt,
		.button.alt {
			background: none;
			box-shadow: inset 0 0 0 1px rgba(224, 224, 224, 0.75);
			color: #544d55;
		}

			input[type="submit"].alt:hover,
			input[type="reset"].alt:hover,
			input[type="button"].alt:hover,
			.button.alt:hover {
				background: rgba(224, 224, 224, 0.15);
			}

			input[type="submit"].alt:active,
			input[type="reset"].alt:active,
			input[type="button"].alt:active,
			.button.alt:active {
				background: rgba(224, 224, 224, 0.35);
			}

		input[type="submit"].fit,
		input[type="reset"].fit,
		input[type="button"].fit,
		.button.fit {
			width: 100%;
		}

		input[type="submit"].small,
		input[type="reset"].small,
		input[type="button"].small,
		.button.small {
			font-size: 0.8em;
		}

/* Box */

	.box {
		background: #000;
		border: solid 1px rgba(224, 224, 224, 0.75);
		margin-bottom: 6em;
		padding: 3.5em;
	}

		.box.alt {
			background: none;
			border: none;
			padding: 0;
		}

/* Feature */

	.feature {
		position: relative;
		height: 20em;
	}

		.feature:after {
			clear: both;
			content: '';
			display: block;
		}

		.feature h3, .feature h4, .feature h5, .feature h6 {
			text-align: inherit;
		}

		.feature .image {
			display: inline-block;
			height: 100%;
			overflow: hidden;
			position: relative;
			width: 50%;
		}

			.feature .image img {
				display: block;
				min-height: 100%;
				min-width: 100%;
				position: absolute;
			}

		.feature:before {
			background: blue;
			content: '';
			display: inline-block;
			height: 100%;
			vertical-align: middle;
		}

		.feature .content {
			display: inline-block;
			padding: 3.5em;
			vertical-align: middle;
			width: 48%;
		}

			.feature .content h3 {
				margin-bottom: 0.5em;
			}

			.feature .content :last-child {
				margin: 0;
			}

		.feature.left {
			text-align: left;
		}

			.feature.left .image {
				float: left;
			}

				.feature.left .image img {
					right: 0;
					top: 0;
				}

			.feature.left .content {
				padding-right: 0;
			}

		.feature.right {
			text-align: right;
		}

			.feature.right .image {
				float: right;
			}

				.feature.right .image img {
					left: 0;
					top: 0;
				}

			.feature.right .content {
				padding-left: 0;
			}

		.feature.long .content {
			padding-top: 0;
		}

/* Header */

	#header {
		background-attachment: scroll,							scroll,					fixed;
		background-image: url("images/top-3200.svg"), url("images/overlay.png"), url("../../images/header.jpg");
		background-position: bottom center,					top left,				center center;
		background-repeat: repeat-x,						repeat,					no-repeat;
		background-size: 3200px 460px,					auto,					cover;
		color: rgba(255, 255, 255, 0.8);
		/* padding: 10em 0 20em 0; */
		position: relative;
		height:50vh;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		text-align: center;
	}

		#header:before, #header:after {
			background: rgba(224, 224, 224, 0.75);
			content: '';
			left: 50%;
			position: absolute;
			width: 1px;
			z-index: 0;
		}

		#header:before {
			height: calc(100% - 50px);
			opacity: 0.15;
			top: 0;
		}

		#header:after {
			bottom: 0;
			height: 50px;
		}

		#header a {
			border-bottom-color: rgba(255, 255, 255, 0.35);
			color: rgba(255, 255, 255, 0.8);
		}

			#header a:hover {
				border-bottom-color: transparent;
				color: #4eb980;
			}

		#header strong, #header b {
			color: #ffffff;
		}

		#header h1, #header h2, #header h3, #header h4, #header h5, #header h6 {
			color: #ffffff;
		}

		#header input[type="submit"],
		#header input[type="reset"],
		#header input[type="button"],
		#header .button {
			background: #ffffff;
			color: #544d55;
		}

		#header .logo {
			background: #4eb980;
			border-radius: 100%;
			color: #ffffff;
			cursor: default;
			display: inline-block;
			font-size: 2.25em;
			height: 2.35em;
			line-height: 2.35em;
			margin: 0 0 0.75em 0;
			text-align: center;
			width: 2.35em;
		}

			#header .logo.fa-paper-plane-o:before {
				left: -0.075em;
				position: relative;
			}

		#header h1 {
			font-size: 2.5em;
			margin: 0;
		}

		#header p {
			font-size: 1.5em;
			line-height: 1.5em;
			margin: 0.25em 0 0 0;
		}

/* Footer */

	#footer {
		background-attachment: scroll;
		background-color: #000;
		background-image: url("images/bottom-3200.svg");
		background-position: top center;
		background-repeat: repeat-x;
		background-size: 3200px 460px;
		color: rgba(255, 255, 255, 0.8);
		/*
				Since the SVG background occupies a lot of vertical space, we'll
				add additional top padding (to move our content out of its way)
				and a negative margin (to move everything up a bit).
			*/

		margin-top: -260px;
		padding: calc(460px + 6em) 0 10em 0;
		position: relative;
		text-align: center;
	}

		#footer:before {
			background: rgba(224, 224, 224, 0.75);
			content: '';
			height: calc(460px + 6em);
			left: 50%;
			position: absolute;
			top: 0;
			width: 1px;
			z-index: 0;
		}

		#footer a {
			color: #ffffff;
		}

		#footer strong, #footer b {
			color: #ffffff;
		}

		#footer h1, #footer h2, #footer h3, #footer h4, #footer h5, #footer h6 {
			color: #ffffff;
		}

		#footer header p {
			color: rgba(255, 255, 255, 0.5);
		}

		#footer input[type="submit"],
		#footer input[type="reset"],
		#footer input[type="button"],
		#footer .button {
			background: #ffffff;
			box-shadow: inset 0 0 0 1px #ffffff;
			color: #4eb980;
		}

			#footer input[type="submit"]:hover,
			#footer input[type="reset"]:hover,
			#footer input[type="button"]:hover,
			#footer .button:hover {
				background: rgba(224, 224, 224, 0.15);
				color: #ffffff;
			}

		#footer input[type="text"]:focus,
		#footer input[type="password"]:focus,
		#footer input[type="email"]:focus,
		#footer select:focus,
		#footer textarea:focus {
			border-color: #ffffff;
		}

		#footer .formerize-placeholder {
			color: rgba(255, 255, 255, 0.3) !important;
		}

		#footer form {
			margin: 3em 0;
		}

		#footer .copyright {
			color: rgba(255, 255, 255, 0.5);
			font-size: 0.8em;
			line-height: 1em;
			margin: 3em 0 0 0;
		}

			#footer .copyright li {
				border-left: dotted 1px;
				display: inline-block;
				margin-left: 1em;
				padding-left: 1em;
			}

				#footer .copyright li:first-child {
					padding: 0;
					margin: 0;
					border: 0;
				}

				#footer .copyright li a, #footer .copyright li span {
					color: inherit;
				}

					#footer .copyright li a:hover, #footer .copyright li span:hover {
						color: #ffffff;
					}

/* Main */

	#main {
		padding: 6em 0 5em 0;
		position: relative;
		z-index: 1;
	}

		#main:before {
			background: rgba(224, 224, 224, 0.75);
			content: '';
			height: 100%;
			left: 50%;
			position: absolute;
			top: 0;
			width: 1px;
			z-index: -1;
		}

		#main header.major,
		#main footer.major {
			/* background: #ffffff; */
		}

/* Wide */

	@media screen and (max-width: 1680px) {

		/* Basic */

			body, input, select, textarea {
				font-size: 14pt;
			}

			h2 {
				font-size: 1.5em;
			}

			h3 {
				font-size: 1.25em;
			}

		/* Section/Article */

			header.major p {
				font-size: 1.25em;
			}

		/* Header */

			#header {
				padding: 8em 0 16em 0;
			}

				#header h1 {
					font-size: 2.25em;
				}

				#header p {
					font-size: 1.25em;
					line-height: 1.65em;
				}

	}

/* Normal */

	@media screen and (max-width: 1280px) {

		/* Basic */

			body, input, select, textarea {
				font-size: 13pt;
			}

			h2 {
				font-size: 1.35em;
			}

			h3 {
				font-size: 1.15em;
			}

		/* Section/Article */

			header.major {
				margin-bottom: 4em;
				padding: 3em 0;
			}

				header.major p {
					font-size: 1.15em;
				}

			footer.major {
				margin-top: 4em;
				padding: 3em 0;
			}

		/* Box */

			.box {
				padding: 2.5em;
				margin-bottom: 4em;
			}

		/* Feature */

			.feature {
				height: 18em;
			}

				.feature .content {
					padding: 2.5em;
				}

		/* Header */

			#header {
				background-attachment: scroll,							scroll,							scroll;
				background-image: url("images/top-1600.svg"), url("images/overlay.png"), url("../../images/header.jpg");
				background-size: 1600px 230px,					auto,							cover;
				padding: 6em 0 12em 0;
			}

				#header:before {
					height: calc(100% - 25px);
				}

				#header:after {
					height: 25px;
				}

				#header h1 {
					font-size: 2em;
				}

				#header p {
					font-size: 1.15em;
				}

		/* Footer */

			#footer {
				background-image: url("images/bottom-1600.svg");
				background-size: 1600px 230px;
				margin-top: -100px;
				padding: calc(230px + 4em) 0 6em 0;
			}

				#footer:before {
					height: calc(230px + 4em);
				}

		/* Main */

			#main {
				padding: 4em 0 3em 0;
			}

	}

/* Narrow */

	@media screen and (max-width: 980px) {

		/* Basic */

			body, input, select, textarea {
				font-size: 12pt;
			}

	}

/* Narrower */

	@media screen and (max-width: 840px) {

		/* Section/Article */

			header.major {
				padding-left: 2em;
				padding-right: 2em;
			}

			footer.major {
				padding-left: 2em;
				padding-right: 2em;
			}

	}

/* Mobile */

	@media screen and (max-width: 736px) {

		/* Basic */

			h2 {
				font-size: 1em;
			}

			h3 {
				font-size: 1em;
			}

		/* Section/Article */

			header p {
				font-size: 0.8em;
			}

			header.major {
				margin-bottom: 2em;
			}

				header.major br {
					display: none;
				}

				header.major p {
					font-size: 0.8em;
				}

			footer.major {
				margin-top: 2em;
			}

				footer.major br {
					display: none;
				}

		/* Box */

			.box {
				padding: 2em;
				margin-bottom: 2em;
			}

		/* Feature */

			.feature {
				background: #ffffff;
				display: block;
				height: auto;
				margin-bottom: 2em;
			}

				.feature:last-child {
					margin-bottom: 0;
				}

				.feature:before, .feature:after {
					display: none;
				}

				.feature .image {
					float: none;
					height: 15em;
					width: 100%;
				}

				.feature .content {
					border: solid 1px rgba(224, 224, 224, 0.75);
					padding: 2em !important;
					text-align: center;
					width: 100%;
				}

		/* Header */

			#header {
				background-image: url("images/top-1280.svg"), url("images/overlay.png"), url("../../images/header.jpg");
				background-size: 1280px 184px,						auto,							cover;
				padding: 3em 0 7em 0;
			}

				#header:before {
					height: calc(100% - 20px);
				}

				#header:after {
					height: 20px;
				}

				#header .logo {
					font-size: 1.5em;
				}

				#header h1 {
					font-size: 1.25em;
				}

				#header p {
					font-size: 1em;
				}

		/* Footer */

			#footer {
				background-image: url("images/bottom-1280.svg");
				background-size: 1280px 184px;
				margin-top: -75px;
				padding: calc(184px + 2em) 0 2em 0;
			}

				#footer:before {
					height: calc(184px + 2em);
				}

				#footer form {
					padding-bottom: 0;
				}

		/* Main */

			#main {
				padding: 2em 0 2em 0;
			}

	}

/* Mobile (Portrait) */

	@media screen and (max-width: 480px) {

		/* Section/Article */

			header.major {
				padding-left: 1em;
				padding-right: 1em;
			}

			footer.major {
				padding-left: 1em;
				padding-right: 1em;
			}

		/* Button */

			input[type="submit"],
			input[type="reset"],
			input[type="button"],
			.button {
				display: block;
				width: 100%;
			}

		/* Box */

			.box {
				padding: 2em 1em;
			}

		/* Feature */

			.feature {
				margin-bottom: 1em;
			}

				.feature .content {
					padding: 2em 1em !important;
				}

		/* Main */

			#main {
				padding-left: 1em;
				padding-right: 1em;
			}

		/* Footer */

			#footer {
				margin-top: -100px;
				padding-left: 1em;
				padding-right: 1em;
			}

				#footer .copyright li {
					border: 0;
					display: block;
					margin: 0;
					padding: 0.75em 0 0 0;
				}

		/* Header */

			#header {
				padding-left: 2em;
				padding-right: 2em;
			}

				#header br {
					display: none;
				}

	}









`