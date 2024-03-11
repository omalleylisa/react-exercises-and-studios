export default function BookList() {
   let pageTitle = "shrug";
   let book1 = "https://3.bp.blogspot.com/-Tas00IVuO5U/WBqnn8JvBPI/AAAAAAAAIjw/TZAdi2K_JV4cWc4zUJ7NZIKZG0357wdEACLcB/s1600/castle.jpg";
   let book2 = "http://prodimage.images-bn.com/pimages/9780374529949_p0_v4_s1200x630.jpg";
   let book3 = "https://ilarge.lisimg.com/image/16751516/740full-the-fire-next-time-cover.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The Castle by Franz Kafka" />
         <img src={book2} alt="Play It As It Lays by Joan Didion" />
         <img src={book3} alt="The Fire Next Time by James Baldwin" />
      </div>      
   );
}