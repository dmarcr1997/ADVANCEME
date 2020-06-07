class CreateGoals < ActiveRecord::Migration[6.0]
  def change
    create_table :goals do |t|
      t.string    :name
      t.datetime  :timeframe
      t.integer   :exp
      t.boolean   :ended
    end
  end
end
