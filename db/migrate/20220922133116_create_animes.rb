class CreateAnimes < ActiveRecord::Migration[7.0]
  def change
    create_table :animes do |t|
      t.string :animeTitle
      t.string :animeImg
      t.string :releasedDate

      t.timestamps
    end
  end
end
