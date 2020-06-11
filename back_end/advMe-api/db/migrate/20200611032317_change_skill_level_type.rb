class ChangeSkillLevelType < ActiveRecord::Migration[6.0]
  def change
    change_column :skills, :level, :float
  end
end
