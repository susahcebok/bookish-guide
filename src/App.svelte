<script>
	export let name;
</script>

<article>
<h1>PFP {name}</h1>
<hr>
<p>You can use this web app to add Palestinian support to your profile picture.</p>

<div id='full'>
<p><canvas></canvas></p>

<p>
<label class="dropbox" for="full-img" style="text-align: center;">place the file or click upload.</label>
<input type="file" id="full-img" accept="image/*" aria-label="Select the picture you want to use" hidden>
</p>

<div class="row">
<div class="column">
<label for='full-zoom'>Zoom (<span id="fz"></span>) :</label>
<input type='range' id='full-zoom' min='0' max='2' step='0.01' value='1'>
</div>
<div class="column">
<label for='full-alpha'>Filter (<span id="fa">0.5</span>) :</label>
<input type='range' id='full-alpha' min='0' max='1' step='0.01' value='0.5'>
</div>
</div>
    
<p>
<button id="click" class="save myth" disabled>Download</button>
<button data-modal="#modal2">Tutorial?</button>
</p>

<div class="modal modal-medium" data-modal-window id="modal2">
<a  class="close" data-modal-close href="#">x</a>
<h3>Tutorial:</h3>
<hr>
<h2>Unggah Foto Anda</h2>
<p>Mulailah transformasi dengan cepat dengan mengunggah foto pilihan Anda menggunakan tombol <em><strong>Letakkan file gambar di sini atau klik untuk mengunggah.</strong></em></p>

<h2>Zoom dan Filter</h2>
<p>Sesuaikan gambar Anda dengan tepat dalam bingkai #Palestine. Editor kami memungkinkan Anda memotong dan memposisikan dengan mudah, memastikan gambar profil Anda mencerminkan gaya dan pesan Anda dengan sempurna.</p>  

<h2>Unduh Foto Profil Anda</h2>
<p>Saatnya menggunakan gambar profil baru Anda! Cukup tekan tombol <em><strong>Unduh</strong></em> foto yang Anda buat untuk menyimpannya secara instan. Bagikan dukungan Anda untuk Palestina dengan foto profil unik Anda.</p>

<p>Apakah jawaban ini bermanfaat bagi Anda?</p>

<p>
<button data-modal-close>Ya</button> 
<button data-modal-close>Tidak</button>
</p>

</div>

<p>
<small>
<strong>Note:</strong> This app runs purely in your browser. No images or data will be saved by the app.
</small>
</p> 

</div>

<div id='divide' style="display:none;">
<div class="canvas-container">
<canvas></canvas>
</div>
<div class="form-group">
<div class="left">
<input type='file' id='divide-left-img' accept='image/*'>
</div>
<div class="right">
<input type='file' id='divide-right-img' accept='image/*'>
</div>
</div>
<div class="form-group">
<div class="left">
<label for='divide-left-zoom'>Zoom</label>
<input type='range' id='divide-left-zoom' min='0' max='1' step='0.01' value='1'>
</div>
<div class="right">
<label for='divide-right-zoom'>Zoom</label>
<input type='range' id='divide-right-zoom' min='0' max='1' step='0.01' value='1'>
</div>
</div>
<div class="form-group">
<div class="left">
<label for='divide-left-alpha'>Filter</label>
<input type='range' id='divide-left-alpha' min='0' max='1' step='0.01' value='0.5'>
</div>
<div class="right">
<label for='divide-right-alpha'>Filter</label>
<input type='range' id='divide-right-alpha' min='0' max='1' step='0.01' value='0.5'>
</div>
</div>
<div class="form-group">
<div class="save myth">
<div>Unduh</div>
</div>
</div>
</div>

    
<div id="intro" style="display:none;">
<div id="choose">...</div>
<div id="choice">
<div id="choice-full" class="myth">
<div>...</div>
</div>
<div id="choice-divide" class="myth">
<div>...</div>
</div>
</div>
<div id="return-intro" class="myth">
<div>...</div>
</div>
</div>
  
</article>

<style>
       article {
               margin: 5em auto;
               padding-top: 1rem;
               padding-bottom: 1rem;
               padding: 2rem;
       }


	@media (max-width: 700px) {
        article {
               margin: 0 auto;
               width: auto;
        }
        }
</style>
