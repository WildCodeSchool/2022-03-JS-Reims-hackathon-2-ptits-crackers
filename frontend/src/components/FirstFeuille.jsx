export default function FirstFeuille() {
  return (
    <div className="letter ">
      <div className="bg-[#183650] w-full-screen p-4 m-2">
        <p className="text-slate-50 text-center ">
          Nom du projet : SolarBreeze
        </p>
      </div>
      <div className="flex ">
        <div className="flex flex-col ">
          <div className="flex ">
            <img
              src="https://picsum.photos/id/3/250/300"
              alt="logo"
              className="img1 w-40 h-52 mr-16 m-5"
            />
            <div className="flex flex-col ">
              <h1 className="text-center m-2 ">Objectifs du project</h1>

              <p className="m-2 z-20 text-sm">
                Le Lorem Ipsum est simplement du faux texte employé dans la
                composition et la mise en page avant impression. Le Lorem Ipsum
                est le faux texte standard de l'imprimerie depuis les années
                1500, quand un imprimeur anonyme assembla ensemble des morceaux
                de texte pour réaliser un livre spécimen de polices de texte. Il
                n'a pas fait que survivre cinq siècles, mais s'est aussi adapté
                à la bureautique informatique, sans que son contenu n'en soit
                modifié.
              </p>
            </div>
          </div>
          <div className="flex flex-row-reverse m-6">
            <img
              src="https://picsum.photos/id/4/250/300"
              alt="logo"
              className="img2 w-40 h-52 mt-16 ml-10 "
            />
            <div className="flex flex-col">
              <h1 className=" text-center ">Contexte du project</h1>
              <p className="m-2 text-sm  ">
                Le Lorem Ipsum est simplement du faux texte employé dans la
                composition et la mise en page avant impression. Le Lorem Ipsum
                est le faux texte standard de l'imprimerie depuis les années
                1500, quand un imprimeur anonyme assembla ensemble des morceaux
                de texte pour réaliser un livre spécimen de polices de texte. Il
                n'a pas fait que survivre cinq siècles, mais s'est aussi adapté
                à la bureautique informatique, sans que son contenu n'en soit
                modifié. Il a été popularisé dans les années 1960 grâce à la
                vente de feuilles
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
