import{L as d}from"./Layout.b71760ab.js";import{L as _,H as u,r as n,o as m,c as b,a as l,w as o,b as t,t as a,F as p,f as h,g as f}from"./app.a6635da7.js";import{_ as v}from"./_plugin-vue_export-helper.cdc0426e.js";const g={layout:d,components:{Link:_,Head:u},props:{faq:Object}},x={class:"page-wrapper"},L={class:"page-content"},y=h('<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3"><div class="breadcrumb-title pe-3">FAQ</div><div class="ps-3"><nav aria-label="breadcrumb"><ol class="breadcrumb mb-0 p-0"><li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a></li><li class="breadcrumb-item active" aria-current="page">Edit FAQ</li></ol></nav></div></div>',1),q={class:"card border-top border-0 border-3 border-primary"},w={class:"card-body"},H={class:"d-lg-flex align-items-center"},k={class:"ms-auto"},A=f("Kembali"),F={class:"table mb-0"},N=t("tr",null,[t("th",null,"Judul")],-1),S=t("tr",null,[t("td",{colspan:"2"})],-1),T=t("tr",null,[t("th",null,"Dibuat")],-1),V=t("tr",null,[t("td",{colspan:"2"})],-1),B=t("tr",null,[t("th",null,"Jawaban")],-1),D=["innerHTML"];function E(r,Q,e,j,C,J){const i=n("Head"),c=n("Link");return m(),b(p,null,[l(i,null,{default:o(()=>{var s;return[t("title",null,a((s=r.$page.props.setting.app_name)!=null?s:"Atur Setting Terlebih Dahulu")+" - Edit FAQ",1)]}),_:1}),t("div",x,[t("div",L,[y,t("div",q,[t("div",w,[t("div",H,[t("div",k,[l(c,{href:"/admin/faqs",class:"btn btn-primary btn-sm mt-2 mt-lg-0"},{default:o(()=>[A]),_:1})])]),t("table",F,[t("tbody",null,[N,t("tr",null,[t("td",null,a(e.faq.question),1)]),S,T,t("tr",null,[t("td",null,a(e.faq.created_at),1)]),V,B,t("tr",null,[t("td",null,[t("div",{innerHTML:e.faq.answer},null,8,D)])])])])])])])])],64)}const O=v(g,[["render",E]]);export{O as default};
