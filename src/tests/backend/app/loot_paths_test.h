/*  LOOT

A load order optimisation tool for Oblivion, Skyrim, Fallout 3 and
Fallout: New Vegas.

Copyright (C) 2014-2016    WrinklyNinja

This file is part of LOOT.

LOOT is free software: you can redistribute
it and/or modify it under the terms of the GNU General Public License
as published by the Free Software Foundation, either version 3 of
the License, or (at your option) any later version.

LOOT is distributed in the hope that it will
be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with LOOT.  If not, see
<https://www.gnu.org/licenses/>.
*/

#ifndef LOOT_TESTS_BACKEND_LOOT_PATHS_TEST
#define LOOT_TESTS_BACKEND_LOOT_PATHS_TEST

#include "backend/app/loot_paths.h"

#include <gtest/gtest.h>

namespace loot {
namespace test {
TEST(LootPaths, getReadmePathShouldUseLootAppPath) {
  LootPaths::initialise();

  EXPECT_EQ(boost::filesystem::current_path() / "docs" / "LOOT Readme.html", LootPaths::getReadmePath());
}

TEST(LootPaths, getUIIndexPathShouldUseLootAppPath) {
  LootPaths::initialise();

  EXPECT_EQ(boost::filesystem::current_path() / "resources" / "ui" / "index.html", LootPaths::getUIIndexPath());
}

TEST(LootPaths, getL10nPathShouldUseLootAppPath) {
  LootPaths::initialise();

  EXPECT_EQ(boost::filesystem::current_path() / "resources" / "l10n", LootPaths::getL10nPath());
}

TEST(LootPaths, getSettingsPathShouldUseLootDataPath) {
  LootPaths::initialise();

  EXPECT_EQ(LootPaths::getLootDataPath() / "settings.yaml", LootPaths::getSettingsPath());
}

TEST(LootPaths, getLogPathShouldUseLootDataPath) {
  LootPaths::initialise();

  EXPECT_EQ(LootPaths::getLootDataPath() / "LOOTDebugLog.txt", LootPaths::getLogPath());
}

TEST(LootPaths, initialiseShouldSetTheAppPathToTheCurrentPath) {
  LootPaths::initialise();

  EXPECT_EQ(boost::filesystem::current_path(), LootPaths::getReadmePath().parent_path().parent_path());
}

TEST(LootPaths, initialiseShouldSetTheDataPathToTheLocalAppDataPathSlashLoot) {
  LootPaths::initialise();

  // Can't actually know what the path should be, but we can check
  // its properties.
  EXPECT_EQ("LOOT", LootPaths::getLootDataPath().filename());
  EXPECT_FALSE(LootPaths::getLootDataPath().parent_path().empty());
  EXPECT_TRUE(boost::filesystem::exists(LootPaths::getLootDataPath().parent_path()));
}
}
}

#endif
