import React from "react";

const Politique = () => {
  return (
    <div className="max-w-4xl mx-auto py-20 px-4 font-mono text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Politique de confidentialité</h1>
      <p className="mb-4">Dernière mise à jour : 3 juin 2025</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Données collectées</h2>
      <p>
        Nous collectons les données que vous fournissez volontairement via le
        formulaire de contact : nom, adresse email, et message.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Utilisation</h2>
      <p>
        Vos données sont utilisées uniquement pour vous répondre. Aucune donnée
        n’est vendue ni partagée.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Stockage</h2>
      <p>
        Les messages sont temporairement gérés par Formspree. Leur politique est
        disponible
        <a
          href="https://formspree.io/legal/privacy-policy/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline ml-1"
        >
          ici
        </a>
        .
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Vos droits</h2>
      <p>
        Vous pouvez demander la consultation, rectification ou suppression de
        vos données à :<strong> ainarakotoarimanana3@gmail.com</strong>
      </p>
    </div>
  );
};

export default Politique;
