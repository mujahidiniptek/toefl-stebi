import{L as q}from"./Layout.b71760ab.js";import{L as x,H as E,i as A,r as c,o as d,c as m,a as u,w as f,b as e,j as S,k as V,l as C,n as F,t as b,d as v,F as L,m as j,f as D,g as N}from"./app.a6635da7.js";import{S as B}from"./sweetalert2.all.e70935e2.js";import{E as U}from"./Editor.4fd38177.js";import{_ as H}from"./_plugin-vue_export-helper.cdc0426e.js";const Q={layout:q,components:{Link:x,Head:E,Editor:U},props:{errors:Object,faq:Object},setup(i){const t=A({question:i.faq.question,answer:i.faq.answer});return{form:t,submit:()=>{j.Inertia.put(`/admin/faqs/${i.faq.id}`,{question:t.question,answer:t.answer},{onSuccess:()=>{B.fire({title:"Success!",text:"FAQ Berhasil Diupdate!.",icon:"success",showConfirmButton:!1,timer:1e3})}})}}}},T={class:"page-wrapper"},I={class:"page-content"},M=D('<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3"><div class="breadcrumb-title pe-3">FAQ</div><div class="ps-3"><nav aria-label="breadcrumb"><ol class="breadcrumb mb-0 p-0"><li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a></li><li class="breadcrumb-item active" aria-current="page">Edit FAQ</li></ol></nav></div></div>',1),O={class:"card border-top border-0 border-3 border-primary"},R={class:"card-body"},z={class:"d-lg-flex align-items-center"},J={class:"ms-auto"},K=N("Kembali"),P={class:"col-12"},G=e("label",{class:"form-label"},"Pertanyaan",-1),W={key:0,class:"invalid-feedback"},X={class:"col-12"},Y=e("label",{class:"form-label"},[e("b",null,"Jawaban")],-1),Z={key:0},$=e("div",{class:"col-12"},[e("button",{type:"submit",class:"btn btn-primary btn-sm px-5"},"Submit")],-1);function ee(i,t,s,o,te,ae){const g=c("Head"),h=c("Link"),y=c("Editor");return d(),m(L,null,[u(g,null,{default:f(()=>{var a;return[e("title",null,b((a=i.$page.props.setting.app_name)!=null?a:"Atur Setting Terlebih Dahulu")+" - Edit FAQ",1)]}),_:1}),e("div",T,[e("div",I,[M,e("div",O,[e("div",R,[e("div",z,[e("div",J,[u(h,{href:"/admin/faqs",class:"btn btn-primary btn-sm mt-2 mt-lg-0"},{default:f(()=>[K]),_:1})])]),e("form",{onSubmit:t[2]||(t[2]=S((...a)=>o.submit&&o.submit(...a),["prevent"])),class:"row g-3"},[e("div",P,[G,V(e("input",{type:"text",class:F(["form-control",{"is-invalid":s.errors.question}]),"onUpdate:modelValue":t[0]||(t[0]=a=>o.form.question=a),placeholder:"Nama"},null,2),[[C,o.form.question]]),s.errors.question?(d(),m("div",W,b(s.errors.question),1)):v("",!0)]),e("div",X,[Y,u(y,{"api-key":i.$page.props.setting.tinymce_api_key,modelValue:o.form.answer,"onUpdate:modelValue":t[1]||(t[1]=a=>o.form.answer=a),init:{automatic_uploads:!0,height:400,external_plugins:{tiny_mce_wiris:"/assets/plugins/wiris/mathtype-tinymce5/plugin.min.js"},plugins:["advlist autolink lists link image charmap print preview hr anchor pagebreak","searchreplace wordcount visualblocks visualchars code fullscreen","insertdatetime media nonbreaking save table contextmenu directionality","emoticons template paste textcolor colorpicker textpattern imagetools"],draggable_modal:!0,toolbar:"insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media | forecolor backcolor emoticons | tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry",image_advtab:!0,image_title:!0,automatic_uploads:!0,images_upload_url:"/upload",images_upload_credentials:!0,file_picker_types:"image",file_picker_callback:function(a,ie,se){var r=i.document.createElement("input");r.setAttribute("type","file"),r.setAttribute("accept","image/*"),r.onchange=function(){var n=this.files[0],l=new i.FileReader;l.readAsDataURL(n),l.onload=function(){var w="blobid"+new Date().getTime(),p=i.tinymce.activeEditor.editorUpload.blobCache,k=l.result.split(",")[1],_=p.create(w,n,k);p.add(_),a(_.blobUri(),{title:n.name})}},r.click()}}},null,8,["api-key","modelValue","init"]),s.errors.answer?(d(),m("div",Z,b(s.errors.answer),1)):v("",!0)]),$],32)])])])])],64)}const de=H(Q,[["render",ee]]);export{de as default};
